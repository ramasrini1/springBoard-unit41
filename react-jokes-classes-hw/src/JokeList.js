import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";


class JokeList extends Component {
  
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
   super(props);
   this.state = {
     jokes : []
    }
    this.vote = this.vote.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.generateNewJokes = this.generateNewJokes.bind(this);
  }

  async getJokes() {
    let j = this.state.jokes;
    let seenJokes = new Set();
    try {
      while (j.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { status, ...jokeObj } = res.data;

        if (!seenJokes.has(jokeObj.id)) {
          seenJokes.add(jokeObj.id);
          j.push({ ...jokeObj, votes: 0 });
        } else {
          console.error("duplicate found!");
        }
      }
      this.setState({jokes: j});
    } catch (e) {
      console.log(e);
    }
  }
  generateNewJokes(){
    this.setState({jokes: []});
  }
  /* change vote for this id by delta (+1 or -1) */

  vote(id, delta) {
    
    let jokesUpdated = this.state.jokes.map(j => ( 
       j.id === id ? { ...j, votes: j.votes + delta } : j ))

    this.setState({jokes: jokesUpdated});
   
    // this.setState(st => ({
    //   jokes: st.jokes.map(j =>
    //     j.id === id ? { ...j, votes: j.votes + delta } : j
    //   )
    // }));
  }

   /* at mount, get jokes */
  componentDidMount() {
    
    if (this.state.jokes.length < this.props.numJokesToGet) {
      this.getJokes();
    }
  }

  componentDidUpdate() {
    if (this.state.jokes.length < this.props.numJokesToGet) {
      this.getJokes();
    }
  }

  /* render: either loading spinner or list of sorted jokes. */

  render() {
    let j = this.state.jokes;
    let sortedJokes = [...j].sort((a, b) => b.votes - a.votes);
    
    return (
      <div className="JokeList">
        <button className="JokeList-getmore" onClick={this.generateNewJokes}>
          Get New Jokes
        </button>
        { sortedJokes.map(eachJoke => (
            <Joke   
              text={eachJoke.joke}
              key={eachJoke.id}
              id={eachJoke.id}
              votes={eachJoke.votes}
              vote={this.vote} />
        ))}
         {sortedJokes.length < this.props.numJokesToGet ? (
          <div className="loading">
            <i className="fas fa-4x fa-spinner fa-spin" />
          </div>
        ) : null}
      </div>
    )
  }
}
export default JokeList;

/* change vote for this id by delta (+1 or -1) */

// vote(id, delta) {
    
//   let jokesUpdated = this.state.jokes;

//   jokesUpdated.map(j => ( 
//    j.id === id ? { ...j, votes: j.votes + delta } : j ));

//   this.setState({jokes: jokesUpdated});
//   this.setState({jokes: jokesUpdated});
  
  // let myJokeList = this.state.jokes.map(function (element){
  //   if (element.id === id){
  //     console.log("element.id " + element.id);
  //     element.votes = element.votes + delta;
  //     element.jokes = {id:element.id, joke:element.joke}
  //   }
  //   return element;
  // })
  // //print the jokes
  // myJokeList.map(js => ( 
  //   console.log("joke id and votes are " + js.id + " " + js.votes)
  //))
  //this.setState(myJokeList);

  // this.setState(st => ({
  //   jokes: st.jokes.map(j =>
  //     j.id === id ? { ...j, votes: j.votes + delta } : j
  //   )
  // }));

//}








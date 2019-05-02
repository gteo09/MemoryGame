import React, {Component} from 'react';
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import friends from "./friends.json";
import FriendCard from './Components/friendcard/Friendcard';
import Wrapper from "./Components/wrapper/Wrapper"


//setting state to friends json to access contents
class App extends Component{
  state={
    friends,
    clickedArray:[],
    score:0
  }

  shufflePics = (arr)=>{
    for(let i = arr.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  

  handleShuffle =()=>{

    let shuffledArr = this.shufflePics(friends);
    this.setState({friends:shuffledArr});
  };

  handleImgClick = (event) =>{

    //grab alt property of clicked image
    const clickedFriend = event.target.alt;

    //removes clicked image from available images array
    const prevClick =
    this.state.clickedArray.indexOf(clickedFriend) > -1;

    //checks if clicked image has already been clicked
    if (prevClick) {
      //shuffles array
      this.handleShuffle();
      //empties clicked array and resets score
      this.setState({
        clickedArray: [],
        score: 0
      });
        alert("You lose. Click a picture to start again!");

//else add image to clickedarray and increase score by 1
    } else {

      this.handleShuffle();

      this.setState(
        {
          clickedArray: this.state.clickedArray.concat(
            clickedFriend
          ),
          score: this.state.score + 1
        },
  //if score reaches 12 you win        
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            //array shuffled
            this.handleShuffle();
            //clicked array and score are reset
            this.setState({
              clickedArray: [],
              score: 0
            });
          }
        }
      );
    };
  };

  //looping over friends to create cards
  render(){
    return(
      <div>
      <Navbar 
      score={this.state.score}
      />
       <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleImgClick={this.handleImgClick}
            alt={friend.name}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    )
  }

};


export default App;

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
    this.setState({friends:shuffledArr})
  }

  handleImgClick = (event) =>{

    const clicked = event.target.value;
    
    console.log(clicked);

    this.handleShuffle();

    //this.state.clickedArray.push(clickedImg);

  }


  //props object being sent
  //  props{
  //    id:friend.id,
  //    key:friend.id,
  //    image:friend.image,
  //    handleImgClick: ()=>{
  //       function that pushes to clickedArray in state obj
  //    }
  //  }



  //looping over friends to create cards
  render(){
    return(
      <div>
      <Navbar />
       <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleImgClick={this.handleImgClick}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    )
  }

};


export default App;

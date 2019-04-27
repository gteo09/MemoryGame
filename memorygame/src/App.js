import React from 'react';
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import friends from "./friends.json";
import FriendCard from './Components/friendcard/Friendcard';

function App() {

  return (
  <div>
    <Navbar />
    <FriendCard friends />
    <Footer />;
  </div>
  
  )
}

export default App;

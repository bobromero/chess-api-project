import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile';

var ChessWebAPI = require('chess-web-api');

var chessAPI = new ChessWebAPI();
let titeledArray = []
chessAPI.getTitledPlayers('WGM')
    .then(function(response) {
        
        for (let i = 0; i <= 10; i++){
          
          titeledArray.push(response.body.players[i]);
          console.log(titeledArray);
        }

    }, function(err) {
        console.error(err);
    });



function App() {
  
  const [user, setUser] = useState('550x7');
  const [userName, setUserName] = useState();
  const [userFollowers, setUserFollowers] = useState();
  const [userStreamer, setUserStreamer] = useState();
  const [userCountry, setUserCountry] = useState();
  const [userId, setUserId] = useState();



  chessAPI.getPlayer(user)
    .then(function(response) {
        setUserName(response.body.username);
        setUserFollowers(response.body.followers);
        setUserStreamer(response.body.is_streamer);
        setUserCountry(response.country);
        setUserId(response.player_id);
    }, function(err) {
        console.error(err);
    });

    



    function handleChange(event) {
      this.setUser({value: event.target.value});
    }
  return (
    <div className="App">
      <input type="text" onSubmit={()=> setUser(handleChange)}></input>
      <input type="submit" value="Submit" />
      <Profile
        username={userName}
        country={userCountry}
        followers={userFollowers}
        id={userId}
        streamer={userStreamer}
      
      />
      <h1>here:{user}</h1>
    </div>
  );
}

export default App;

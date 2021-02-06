import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile';

var ChessWebAPI = require('chess-web-api');

var chessAPI = new ChessWebAPI();




let titledArray = []
let player = '';
chessAPI.getTitledPlayers('GM')
    .then(function(response) {
        
        for (let i = 0; i < 10; i++){
          
          titledArray.push(<p key={Math.random()*1000}>{response.body.players[Math.round(Math.random()*response.body.players.length-1)]}</p>);
          
        }
        
    }, function(err) {
        console.error(err);
    });
    player = 'youknowh0';

    
function App() {
  
  const [user, setUser] = useState(player);
  const [userName, setUserName] = useState();
  const [userFollowers, setUserFollowers] = useState();
  const [userStreamer, setUserStreamer] = useState();



  console.log(titledArray[0])
  chessAPI.getPlayer(user)
    .then(function(response) {
        setUserName(response.body.username);
        setUserFollowers(response.body.followers);
        setUserStreamer(response.body.is_streamer);
        
    }, function(err) {
        console.error(err);
    });

    



    function handleChange(event) {
      this.setUser({value: event.target.value});
    }
    
  return (
    <div className="App">
      <input type="text" ></input>
      <input onSubmit={()=> setUser(handleChange)} type="submit" value="Submit" />
      <Profile
        username={userName}
        followers={userFollowers}
        streamer={userStreamer}
      
      />
      <h1>user: {user}</h1>
      <div>{titledArray}</div>
    </div>
  );
}

export default App;

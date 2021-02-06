import React, {useState} from 'react';
import './App.css';
import Profile from './components/Profile';

var ChessWebAPI = require('chess-web-api');

var chessAPI = new ChessWebAPI();




let titledArray = []
let player = '';
chessAPI.getTitledPlayers('GM')
    .then(function(response) {
        
        for (let i = 0; i < 100; i++){
          
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

    



    
  return (
    <div className="App">
      <button  onClick={()=>setUser(titledArray[Math.round(Math.random() * 9)].props.children)}>New GM</button>

      
      <Profile
        username={userName}
        followers={userFollowers}
        streamer={userStreamer}
      
      />
      <button  onClick={()=>setUser(titledArray[Math.round(Math.random() * 99)].props.children)}>New GM</button>
      <h1> 100 Random GMs</h1>
      <div>{titledArray}</div>
    </div>
  );
}

export default App;

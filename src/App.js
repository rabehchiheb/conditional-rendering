import React from 'react';
import profil from './Components/profil.jpg';
import Ronaldo from './Components/Ronaldo.jpg';
import Amira from './Components/amira.jpg';
import Naymar from './Components/naymar.jpg';
import IdHTML from './Components/IdHTML';
import  './App.css';
class img { 
  constructor(avatarUrl, name,text,genre) {
    this.avatarUrl = avatarUrl;
    this.name = name;
    this.text = text;
    this.genre = genre;
  }
  
}; 
var det = [new img(profil, "Chiheb", "Coach","H"),new img(Ronaldo, "Ronaldo", "Player","H"),
new img(Amira, "Amira", "Player","F"),new img(Naymar, "Naymar", "Player","H")

]; 
function App() {
  return (
    <div className="myapp">
      <header className="App-header">
       <h1>Notre équipe</h1>
      </header>
<div className="body">
      <div class="flex-container">
     {
     Array.from(det, x =>  <IdHTML avatarUrl={x.avatarUrl} name={x.name} text={x.text} genre={x.genre}/>)
    
     }

       </div>


 </div>
    </div>
    
  );
  
}

export default App;

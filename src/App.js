import './App.css';
import React from 'react';
import BusinessCard_old from './components/BusinessCard_old.js';
import BusinessCard from './components/BusinessCard.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import businessCardData from './assets/businessCardData.js';


function App() {
  const bcComponents = businessCardData.map(bc => <BusinessCard key={bc.id} name={bc.name} address={bc.address} email={bc.email} img={bc.imgPath} /> );

  return (
    <div className="App">
      <Header/>
      <div>
        <BusinessCard_old
          contact={{
            name:"Max Mustermann",
            email:"max@gmail.com",
            phone:"0467438753",
            street:"Mainstreet 14",
            zip:52834,
            city:"Herning",
            country:"Denmark",
            imgPath:"./img/person1.jpg"
          }}/>
          
          <BusinessCard_old
          contact={{
            name:"Sergei Borov",
            email:"sergei@gmail.com",
            phone:"38425693",
            street:"Mainstreet 45",
            zip:34543,
            city:"Moskau",
            country:"Russio",
            imgPath:"./img/person3.jpg"
          }}/>


          {bcComponents}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

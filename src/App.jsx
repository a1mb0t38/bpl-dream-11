
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/homepage/banner/Banner';
import Players from './components/homepage/players/Players';
import { Suspense, useState } from 'react';


const fetchPlayer = async () =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {


  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(1000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      
    </>
  );
}

export default App

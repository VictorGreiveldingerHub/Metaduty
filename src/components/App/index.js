// == Import npm
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Routes, Route } from 'react-router-dom';

// == Import local
import './style.css';
// A voir dans le futur => SoC
// ABI du contrat avec lequel on intéragit.
import Greeter from '../../artifacts/contracts/Greeter.sol/Greeter.json';

// == Import composants
import Header from '../Header/';
import Home from '../Home';
import Login from '../Login';
import Game from '../Game';
import Train from '../Train';
import SignUp from '../SignUp';
import Legals from '../Legals';
import Contact from '../Contact';
import Footer from '../Footer';

// Addresse où le contrat est déployé
const greeterAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const App = () => {
  
  const [greeting, setGreetingValue] = useState();
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchGreeting();
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  
  async function requestAccount () {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  
  async function fetchGreeting() {
    // S'assurer que métamask est bien connecté
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
      
      try {
        // Je viens intéragir avec le contrat intelligent (function greet() ) pour récupérer dans mon front les données.
        const data = await contract.greet();
        // console.log(data);
        setGreetingValue(data);
      } catch (error) {
        console.log(error);
      };
    };
  };
  
  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue('');
      await transaction.wait();
      // Une fois l'ajout fait on relance direct
      fetchGreeting();
    }
  };
  
  return (
    <div className="app">
      <Header pseudo={greeting}/>
      
      <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      <button onClick={setGreeting}>Bienvenu</button>
      <p>{!data ? "Loading..." : data}</p>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/game' element={<Game />} />
        <Route path='/train' element={<Train />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path='/mentions-legales' element={<Legals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

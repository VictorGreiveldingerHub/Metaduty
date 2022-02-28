// == Import npm
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// == Import local
import './style.css';
// A voir dans le futur => SoC
// ABI du contrat avec lequel on intéragit.
import Greeter from '../../artifacts/contracts/Greeter.sol/Greeter.json';

// == Import composants
import Header from '../Header/';


// Addresse où le contrat est déployé
const greeterAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

const App = () => {
  
  const [greeting, setGreetingValue] = useState();
  
  useEffect(() => {
    fetchGreeting();
  }, []);
  
  async function requestAccount () {
    await window.ethereum.request({method: 'eth_requestAccounts'});
  }
  
  async function fetchGreeting() {
    // S'assurer que métamask est bien connecté
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
      
      try {
        // Je viens intéragir avec le contrat intelligent (function greet() ) pour récupérer dans mon front les données.
        const data = await contract.greet();
        console.log(data);
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
  }
  
  return (
    <div className="app">
      <Header />
      <p>{greeting}</p>
      <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      <button onClick={setGreeting}>Set Greeting</button>
    </div>
  );
}

export default App;
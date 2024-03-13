import { ethers } from "ethers";
import "./App.css";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { abi, contractAddress } from "./config";
import { Persons } from "./components/Persons";
import { AddPerson } from "./components/AddPerson";

if (window.ethereum) {
  window.provider = new ethers.BrowserProvider(window.ethereum);
} else {
  console.error(
    "Ethers.js: Web3 provider not found. Please install a wallet with Web3 support."
  );
}

function App() {
  const [wallet, setWallet] = useState({
    accounts: [],
    balance: "",
  });
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getProvider = async () => {
      // const provider = new ethers.BrowserProvider(window.ethereum);

      // Make read contract - for just reading stuff on the blockchain
      const personReadContract = new ethers.Contract(
        contractAddress,
        abi,
        window.provider
      );
      setReadContract(personReadContract);

      // Make write contract - for changing stuff to the blockchain
      const signer = await provider.getSigner();
      const personWriteContract = new ethers.Contract(
        contractAddress,
        abi,
        signer
      );
      setWriteContract(personWriteContract);

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      updateWallet(accounts);
    };

    getProvider();
  }, []);

  const populatePersons = useCallback(async () => {
    let indexes = await readContract["getIndexList"]();

    let temp = [];
    for (let i = 0; i < indexes.length; i++) {
      const person = await readContract["persons"](indexes[i]);

      if (person.id > 0) temp.push(person);
    }
    setPersons(temp);
  }, [readContract]);

  useEffect(() => {
    if (wallet && readContract) {
      populatePersons();
    }
  }, [wallet, readContract, populatePersons]);

  const updateWallet = async (accounts) => {
    const balance = formatBalance(
      await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    setWallet({ accounts, balance });
  };

  const formatBalance = (rawBalance) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(5);
    return balance;
  };

  return (
    <>
      {wallet?.accounts.length > 0 && (
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <p>Balance: {wallet.balance}</p>
        </>
      )}

      <Persons
        persons={persons}
        contract={writeContract}
        populatePersons={populatePersons}
      />

      <AddPerson
        writeContract={writeContract}
        populatePersons={populatePersons}
      />
    </>
  );
}

export default App;

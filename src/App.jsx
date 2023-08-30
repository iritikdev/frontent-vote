import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";

import DashboardHome from "./components/DashboardHome";
import AddCandidate from "./components/Addcandidate";

import { ethers } from "ethers";

import { abi, contractAddress } from "./constants";

import { useState } from "react";
import ElectionPhase from "./components/ElectionPhase";
import Voters from "./components/Voters";
import Setting from "./components/Setting";

function App() {
  const [state, setState] = useState({
    provider: null,
    constract: null,
    signer: null,
  });

  const [user, setUser] = useState({
    username: "",
    balance: "",
  });

  const [candidates, setCandidates] = useState(null);
  const handleConnectToWallet = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(ethereum);

        const balanceWei = await provider.getBalance(accounts[0]);
        const balanceEth = await ethers.formatEther(balanceWei);

        setUser({ username: accounts[0], balance: balanceEth });

        const signer = await provider.getSigner();

        const contract = new ethers.Contract(contractAddress, abi, signer);

        const currentCandidates = await contract.getAllCandidates();
        setCandidates(currentCandidates);

        setState({ provider, contract, signer });
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(candidates);
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route
            path="add-candidate"
            element={<AddCandidate state={state} />}
          />
          <Route
            path="changeElectionPhase"
            element={<ElectionPhase state={state} />}
          />
          <Route path="voters" element={<Voters />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route
          path="/"
          element={<Layout onClickWallet={handleConnectToWallet} user={user} />}
        >
          <Route
            index
            element={<Home candidates={candidates} state={state} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register state={state} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

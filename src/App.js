
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import CreateNFT from './components/createNFT';
import CreateCampaign from './components/createCampaign';
import {Route, Routes} from 'react-router-dom';
import Mint from './components/Mint';
import { Router, browserHistory } from 'react-router';
import './App.css';

const App= props => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/createCampaign" element={<CreateCampaign/>} />
        <Route path="/createNFT" element={<CreateNFT/>} />
        <Route path="/mint" element={<Mint/>}/>
      </Routes>
    </div>
  );
}

export default App;

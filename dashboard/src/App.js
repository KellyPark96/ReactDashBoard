import './App.css';
import Header from './Components/Header';
import Clock from './Components/Clock'
import DiskMemory from './Components/DiskMemory';
import License from './Components/License';
import SecurityLog from './Components/SecurityLog';
import SSP from './Components/SSP';
import SystemStatus from './Components/SystemStatus';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <div className="layoutWrap">
          <Clock />
          <DiskMemory />
          <License />
          <SSP />
          <SystemStatus />
        </div>
        <div>
          <SecurityLog />
          <SecurityLog />
        </div>
      </div>
    </>
  );
}

export default App;

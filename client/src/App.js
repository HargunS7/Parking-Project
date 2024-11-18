import './App.css';
import Body from './Components/Body.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login.js';
import Navbar from './Components/Navbar.js'
import ParkingSpace from './Components/ParkingSpace.js';
import SignUp from './Components/SignUp.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <ParkingSpace/>
      <Login/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;

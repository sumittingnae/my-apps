import './App.css';
import Nav from './Container/Navigation/Nav'
import Home from'./Container/Hero/home' 
import UserLoc from './Container/UserLoc/usersl';
import Advantage from './Container/Advantage/adva';
import Pricing from './Container/Pricing/price';
import Huge from './Container/Huge/huge';
import Customer from './Container/Customer/cust';
import Help from './Container/Help/help';
import Subscribe from './Container/Subscribe/subs';

function App() {
  return (
    <div className='App'>
     {/*  navigation*/ }
      <Nav/>
      <Home/>
      <UserLoc/>
      <Advantage/>
      <Pricing/> 
      <Huge/>
      <Customer/>
     
      <Subscribe/>
       <Help/>


    </div>
    
  );
}

export default App;

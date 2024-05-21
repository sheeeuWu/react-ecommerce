// import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/homePage/HomePage';

function App() {
  return (
    <div className="">
    <Navigation/>
     <div className="text-center">
      <HomePage  />
     </div>
    </div>
  );
}

export default App;

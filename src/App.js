// import logo from './logo.svg';
import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/navigation';
import Product from './customer/components/product/Product';
import HomePage from './customer/pages/homePage/HomePage';

function App() {
  return (
    <div className="">
    <Navigation/>
     <div className="text-center">
      {/* <HomePage  /> */}
      <Product />
     </div>
     <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/HomeScreen';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import ProductScreen from './components/screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/'
            // Component={HomeScreen}
            element={<HomeScreen />}
             />
          <Route path='/product/:id'
            element={<ProductScreen />}
          // Component={ProductScreen}
          />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;

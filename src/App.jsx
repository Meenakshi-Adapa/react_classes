import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Product from './product'; // Adjust path if needed
import Cart from './cart';       // Adjust path if needed

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My Online Shop</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
          </nav>
          <hr />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer>
          <hr />
          &copy; 2025. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import App1 from './components/App1'; // Adjust path if needed
import App2 from './components/App2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My React Classes</h1>
          <nav>
            
            <Link to="/app1">App1</Link> - 
            <Link to="/app2">App2</Link>
          </nav>
          <hr />
        </header>

        <main>
          <Routes>

            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />

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



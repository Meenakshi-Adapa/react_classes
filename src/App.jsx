import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import App1 from './components/App1'; // Adjust path if needed
import App2 from './components/App2';
import Header from './components/header'; // Adjust path if needed
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Header />
        <main>
          <Routes>

            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />

          </Routes>
        </main>
      <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;



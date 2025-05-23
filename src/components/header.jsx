
import { Link } from 'react-router-dom';
import './header.css'; // Adjust path if needed
export default function Header() {
  return (<header className="header"> 
          <h1>My React Classes</h1>
          <nav class="links">
            
            <Link to="/app1">App1</Link> - 
            <Link to="/app2">App2</Link>
          </nav>
          <hr />
        </header>)
    
}
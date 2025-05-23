
import { Link } from 'react-router-dom';
export default function Header() {
  return (<header>
          <h1>My React Classes</h1>
          <nav>
            
            <Link to="/app1">App1</Link> - 
            <Link to="/app2">App2</Link>
          </nav>
          <hr />
        </header>)
    
}
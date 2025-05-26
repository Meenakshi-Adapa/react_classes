
import { Link } from 'react-router-dom';
import './styles/header.css'; // Adjust path if needed
export default function Header() {
  return (<header className="header"> 
          <h1>My React Classes</h1>
          <nav className="links">
           <Link to="/">App1</Link>-<Link to="/app2">App2</Link>-
            <Link to="/app3">App3</Link>-
            <Link to="/app4">App4</Link>-
            <Link to="/app5">App5</Link>-
            <Link to="/app6">App6</Link>-
            <Link to="/app7">App7</Link>-
            <Link to="/app8">App8</Link>-
            <Link to="/app9">App9</Link>-
            <Link to="/app10">App10</Link>-
            <Link to="/app11">App11</Link>-
            <Link to="/app12">App12</Link>-
            <Link to="/app13">App13</Link>
          </nav>
          <hr />
        </header>)
    
}
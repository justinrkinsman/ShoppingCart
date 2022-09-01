import './Homepage.css';
import { Navbar } from './Navbar'
import { About } from './homePageComponents/About'

export function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <About />
    </div>
  );
}
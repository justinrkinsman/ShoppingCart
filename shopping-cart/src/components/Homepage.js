import './Homepage.css';
import { Navbar } from './Navbar'
import { About } from './homePageComponents/About'
import { Bestsellers } from './homePageComponents/Bestsellers'

export function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <About />
      <Bestsellers />
    </div>
  );
}
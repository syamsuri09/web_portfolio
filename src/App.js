import './App.css';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

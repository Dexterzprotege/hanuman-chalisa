import './styles/App.css';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import Audio from './components/Audio';
import Lyrics from './components/Lyrics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Audio />
      <Lyrics />
      <header className='App-footer'>
        <Footer />
      </header>
    </div>
  );
}

export default App;

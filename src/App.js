import Nav_Bar from './components/navbar';
import HomeContent from './components/home_content';
import Footer from './components/footer';

import './App.css';
import './responsive.css';


function App() {
  return (
    <div className="App">
      <Nav_Bar />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarPage from './components/NavBarPage';
import BannerPage from './components/BannerPage';
import SkillsPage from './components/SkillsPage';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBarPage/>
      <BannerPage/>
      <SkillsPage/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

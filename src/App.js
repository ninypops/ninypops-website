import './App.css';

// download isMobile? or css styles

// components
import Header from './components/header';
import Projects from './components/projects';
import Blog from './components/blog';
import Travel from './components/travel';
import Footer from './components/footer';

function App() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <Projects className="projects" />
      <Blog className="blog" />
      <Travel className="travel" />
      <Footer className="footer" />
    </div>
  );
}

export default App;

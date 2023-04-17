// import logo from './logo.svg';
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
    <wrapper className="ninypops--wrapper">
      <Header className="ninypops--header" />
      <Projects className="ninypops--projects" />
      <Blog className="ninypops--blog" />
      <Travel className="ninypops--travel" />
      <Footer className="ninypops--footer" />
    </wrapper>
  );
}

export default App;

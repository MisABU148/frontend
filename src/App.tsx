import React from 'react';
import './styles/style.css';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Photo from './components/Photo';
import Comic from './components/Comic';
import Footer from './components/Footer';

const App: React.FC = () => (
    <div>
      <div className="title">
        <h3 className="iu">Innopolis University</h3>
        <h3 className="name">Ilyina Maria</h3>
      </div>
      <hr />
      <main>
        <div className="main_info">
          <Education />
          <Skills />
          <Projects />
          <Hobbies />
        </div>
        <Photo />
      </main>
      <Comic />
      <Footer />
    </div>
);

export default App;

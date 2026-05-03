import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'experience' | 'about'>('experience');

  return (
    <>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {currentPage === 'experience' ? (
          <>
            <Hero />
            <Experience />
          </>
        ) : (
          <About />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
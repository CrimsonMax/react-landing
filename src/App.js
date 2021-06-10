import './App.scss';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { News } from './components/News';

function App() {
  return (
    <>
      <Header />
      <News />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

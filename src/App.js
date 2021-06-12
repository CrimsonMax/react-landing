import './App.scss';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { News } from './components/News';
import { ContainerMaterial } from './components/ContainerMaterial';
import { MyNavbar } from './components/MyNavbar';

function App() {
  return (
    <>
      <div className="decorator-second" style={{marginTop: '40px' }}>
        <MyNavbar />
        <div className="decorator-first" style={{marginTop: '-120px' }}>
          <Header />
          <News />
          <ContainerMaterial />
          <Contacts />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

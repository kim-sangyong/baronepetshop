import logo from './logo.svg';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {
  return (
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <MainPage />
            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
  );
}

export default App;

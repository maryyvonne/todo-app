
import './App.css';
import { Content } from './components/navbar/layout/Content';
import { Header } from './components/navbar/layout/Header';
import OffcanvasNavbar from "./components/navbar/OffcanvasNavbar";

export const App = () => 
   (
    <div className='App'>
    <Header />
    <Content />
    </div>
  );




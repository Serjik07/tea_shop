import { Link } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import { Header } from '../components/header';
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Teas } from "../components/Teas"
import '../pages/css/home.css';


export function Home({ productCount }) {
    return (
        <>
            {/* <Navbar valid={'home'} productCount={productCount} /> */}
            <Header />
            <About />
            <Teas />
            <Footer />
        </>
    )
}
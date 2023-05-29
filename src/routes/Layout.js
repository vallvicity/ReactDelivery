import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
export default function Layout() {
    return (
        <>
            <nav style={{backgroundColor: "lightgray", padding: "20px"}}>
                <Link to="/">Home</Link>
                <span>{" | "}</span>
                <Link to="/counter">useEffect</Link>
                <span>{" | "}</span>
                <Link to="todoApp">To-Do App</Link>
                <span>{" | "}</span>
                <Link to="tictactoe">Tic-Tac-Toe Game</Link>
                <span>{" | "}</span>
                <Link to="/contact">Contact</Link>

            </nav>

            <Outlet />

            <Footer />

        </>
    );
}
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Filter from "./components/Filter";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movie/:id" element={<MovieDetails />}/>
                    <Route path="/search/:query" element={<Filter />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

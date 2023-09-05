import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Question from "./views/question/question";
import axios from "axios";
import "./App.css";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/question/:id" element={<Question />} />
            </Routes>
        </div>
    );
}

export default App;

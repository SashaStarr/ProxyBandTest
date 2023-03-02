import {BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "../users/Users";
import Posts from "../posts/Posts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users/>}/>
                <Route path="/posts/:userId" element={<Posts/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
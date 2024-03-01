import { Toaster } from "react-hot-toast"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Explore from "./Explore"
import Login from "./Login"
import Library from "./Library"
import Register from "./Register"

const MainRoute = () => {
    return (
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
            style: {
                background: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
            },
            }}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/library" element={<Library />} />
                
            </Routes>
        </>
    )
}

export default MainRoute
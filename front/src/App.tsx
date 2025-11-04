import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import TopBar from "./components/TopBar";

function App() {


    return (
        <div className="App">
            <div className={"w-screen h-screen bg-gray-200 flex items-center justify-center"}>
                <div className={"w-[375px] h-[640px] bg-[#F9F6F4] relative overflow-hidden shadow-2xl pb-5 pr-5 pl-5"}>
                    <BrowserRouter>
                        <TopBar/>
                        <Routes>
                            <Route path={"/"} element={<LandingPage/>}/>
                            <Route path={"/quiz"} element={<QuizPage/>}/>
                            <Route path={"/checkout"} element={<CheckoutPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>


        </div>
    );
}

export default App;

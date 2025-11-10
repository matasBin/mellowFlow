import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import TopBar from "./components/TopBar";
import {useAppStore} from "./store/allStates";

function App() {

    const {quizEnd} = useAppStore()

    return (
        <div className="App">
            <div className={"w-screen h-screen flex items-center justify-center font-sans"}>
                <div className={`w-full h-full bg-[#F9F6F4] relative ${quizEnd ? "p-0" : "pb-5 pr-5 pl-5 gap-8"}  flex flex-col `}>
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

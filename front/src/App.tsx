import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import CheckoutPage from "./pages/CheckoutPage";
import TopBar from "./components/TopBar";
import {useAppStore} from "./store/allStates";
import RedirectOnRefresh from "./components/RedirectOnRefresh";

function App() {
    // Access global quiz state from Zustand
    const {quizEnd, quizStart} = useAppStore();

    return (
        <div className="App">
            {/* App wrapper with full screen height/width and font styling */}
            <div className={"w-screen h-screen flex items-center justify-center font-sans"}>
                <div className={`w-full h-full bg-[#F9F6F4] relative ${quizEnd ? "p-0" : "pb-5 pr-5 pl-5 gap-8"} flex flex-col`}>

                    {/* BrowserRouter handles all navigation */}
                    <BrowserRouter>
                        {/* Detects refresh and redirects to landing page if needed */}
                        <RedirectOnRefresh/>
                        {/* Top navigation bar with logo, progress, timer */}
                        <TopBar/>
                        {/* App routes */}
                        <Routes>
                            <Route path={"/"} element={<LandingPage/>}/>
                            {/* Protect /quiz route unless quiz has started */}
                            <Route path={"/quiz"} element={quizStart ? <QuizPage/> : <LandingPage/>}/>
                            <Route path={"/checkout"} element={<CheckoutPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;

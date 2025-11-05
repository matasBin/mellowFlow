import heartDark from "../images/darkSvg/heartDarkSvg.svg"
import heartLight from "../images/lightSvg/heartLight.svg"
import handsDark from "../images/darkSvg/handsDarkSvg.svg"
import handsLight from "../images/lightSvg/handsLight.svg"
import cogDark from '../images/darkSvg/cogDarkSvg.svg'
import cogLight from "../images/lightSvg/cogLight.svg"
import moneyDark from "../images/darkSvg/moneyDarkSvg.svg"
import moneyLight from "../images/lightSvg/moneyLight.svg"
import performanceDark from "../images/darkSvg/performanceDarkSvg.svg"
import performanceLight from "../images/lightSvg/performanceLight.svg"
import comicDark from "../images/darkSvg/comicDarkSvg.svg"
import comicLight from "../images/lightSvg/comicLight.svg"


export const quizData = [
    {
        id: 1,
        text: "What is your main reason for wanting to quit drinking?",
        options: [
            {answer: "Health", darkIcon: heartDark, lightIcon: heartLight},
            {answer: "Relationships", darkIcon: handsDark, lightIcon: handsLight},
            {answer: "Control", darkIcon: cogDark, lightIcon: cogLight},
            {answer: "Money", darkIcon: moneyDark, lightIcon: moneyLight},
            {answer: "Performance", darkIcon: performanceDark, lightIcon: performanceLight},
            {answer: "Role model", darkIcon: comicDark, lightIcon: comicLight},

        ]
    },
    {
        id: 2,
        text: "What do you think is the main reason you drink??",
        options: [
            {answer: "Stress or anxiety", darkIcon: heartDark, lightIcon: heartLight},
            {answer: "Socializing", darkIcon: handsDark, lightIcon: handsLight},
            {answer: "Relaxation", darkIcon: cogDark, lightIcon: cogLight},
            {answer: "Emotional escape", darkIcon: moneyDark, lightIcon: moneyLight},
            {answer: "Habit", darkIcon: performanceDark, lightIcon: performanceLight},
            {answer: "Confidence boost", darkIcon: comicDark, lightIcon: comicLight},

        ]
    },

];
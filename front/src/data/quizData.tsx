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
import thunderDark from "../images/darkSvg/thunderDark.svg"
import thunderLight from "../images/lightSvg/thunderLight.svg"
import chatDark from "../images/darkSvg/chatDark.svg"
import chatLight from "../images/lightSvg/chatLight.svg"
import flowerDark from "../images/darkSvg/flowerDark.svg"
import flowerLight from "../images/lightSvg/flowerLight.svg"
import moodDark from "../images/darkSvg/moodDark.svg"
import moodLight from "../images/lightSvg/moodLight.svg"
import notepadDark from "../images/darkSvg/notepadDark.svg"
import notepadLight from "../images/lightSvg/notepadLight.svg"
import rocketDark from "../images/darkSvg/rocketDark.svg"
import rocketLight from "../images/lightSvg/rocketLight.svg"
import greenCheck from "../images/buttonSvg/greenCheck.svg"
import whiteCheck from "../images/buttonSvg/whiteCheck.svg"
import redNo from "../images/buttonSvg/redNo.svg"
import whiteNo from "../images/buttonSvg/whiteNo.svg"
import yellowQuestionMark from "../images/buttonSvg/yellowQuestionMark.svg"
import whiteQuestionMark from "../images/buttonSvg/whiteQuestionMark.svg"


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
            {answer: "Stress or anxiety", darkIcon: thunderDark, lightIcon: thunderLight},
            {answer: "Socializing", darkIcon: chatDark, lightIcon: chatLight},
            {answer: "Relaxation", darkIcon: flowerDark, lightIcon: flowerLight},
            {answer: "Emotional escape", darkIcon: moodDark, lightIcon: moodLight},
            {answer: "Habit", darkIcon: notepadDark, lightIcon: notepadLight},
            {answer: "Confidence boost", darkIcon: rocketDark, lightIcon: rocketLight},

        ]
    },
    {
        id: 3,
        text: "Do you ever drink to feel \"normal\" or fit in with others?",
        options: [
            {answer: "Yes", darkIcon: greenCheck, lightIcon: whiteCheck},
            {answer: "I'm not sure", darkIcon: yellowQuestionMark, lightIcon: whiteQuestionMark},
            {answer: "No", darkIcon: redNo, lightIcon: whiteNo},
        ]
    },
    {
        id: 4,
        text: "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
        options: [
            {answer: "Yes", darkIcon: greenCheck, lightIcon: whiteCheck},
            {answer: "I'm not sure", darkIcon: yellowQuestionMark, lightIcon: whiteQuestionMark},
            {answer: "No", darkIcon: redNo, lightIcon: whiteNo},
        ]
    },
    {
        id: 5,
        text: "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
        options: [
            {answer: "Yes", darkIcon: greenCheck, lightIcon: whiteCheck},
            {answer: "I'm not sure", darkIcon: yellowQuestionMark, lightIcon: whiteQuestionMark},
            {answer: "No", darkIcon: redNo, lightIcon: whiteNo},
        ]
    },
    {
        id: 6,
        text: "Do you often seek ways to relax or unwind after a long, stressful day?",
        options: [
            {answer: "Yes", darkIcon: greenCheck, lightIcon: whiteCheck},
            {answer: "I'm not sure", darkIcon: yellowQuestionMark, lightIcon: whiteQuestionMark},
            {answer: "No", darkIcon: redNo, lightIcon: whiteNo},
        ]
    }

];
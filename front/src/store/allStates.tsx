import {create} from 'zustand'

interface AppStore {
    gender: string;
    quizStart: boolean;
    currentQuestionIndex: number;
    answers: string[]

    setGender: (newGender: string) => void;
    setQuizStart: (newQuizStart: boolean) => void;
    setAnswer: (answer: string) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
}

export const useAppStore = create<AppStore>((set, get) => ({

    gender: '',
    quizStart: false,

    currentQuestionIndex: 0,
    answers: ['', '', '', '', '', ''],

    setGender: (newGender: string) => set({gender: newGender}),
    setQuizStart: (newQuizStart: boolean) => set({quizStart: newQuizStart}),
    setCurrentQuestionIndex: (newCurrentQuestionIndex: number) => set({currentQuestionIndex: newCurrentQuestionIndex}),

    /*Function that saves an answer for the current question*/
    setAnswer: (answer: string) => {
        const {currentQuestionIndex} = get();

        set((state) => {
            const newAnswers = [...state.answers];
            newAnswers[currentQuestionIndex] = answer;
            return {answers: newAnswers};
        })
    },

    nextQuestion: () => {
        const {currentQuestionIndex} = get();
        if (currentQuestionIndex < 6) {
            set({currentQuestionIndex: currentQuestionIndex + 1})
        }
    },

    prevQuestion: () => {
        const {currentQuestionIndex} = get();
        if (currentQuestionIndex > 0) {
            const newIndex = currentQuestionIndex - 1;

            set((state) => {
                const newAnswers = [...state.answers];
                newAnswers[newIndex] = '';
                return {
                    currentQuestionIndex: newIndex,
                    answers: newAnswers,
                }
            })
        }
    }


}))






/*
type Gender = {
    gender: string;
    setGender: (newGender: string) => void;
}

type QuizStart = {
    quizStart: boolean;
    setQuizStart: (newQuizStart: boolean) => void;
}

const genderStore = create<Gender>((set) => ({
    gender: "",
    setGender: (newGender) => set({gender: newGender})
}))

const quizStartStore = create<QuizStart>((set) => ({
    quizStart: false,
    setQuizStart: (newQuizStart) => set({quizStart: newQuizStart})
    })
)

export {genderStore, quizStartStore}*/

import {create} from 'zustand'

interface AppStore {
    gender: string;
    quizStart: boolean;
    quizEnd: boolean;
    currentQuestionIndex: number;
    answers: string[]

    setGender: (newGender: string) => void;
    setQuizStart: (newQuizStart: boolean) => void;
    setQuizEnd: (newQuizEnd: boolean) => void;
    setAnswer: (answer: string) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;

}

export const useAppStore = create<AppStore>((set, get) => ({
    gender: '',
    quizStart: false,
    quizEnd: false,

    currentQuestionIndex: 0,
    answers: ['', '', '', '', '', ''],

    setGender: (newGender: string) => set({gender: newGender}),
    setQuizStart: (newQuizStart: boolean) => set({quizStart: newQuizStart}),
    setQuizEnd: (newQuizEnd: boolean) => set({quizEnd: newQuizEnd}),

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
        } else if (currentQuestionIndex > 6) {
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

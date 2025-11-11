import {create} from 'zustand'

interface AppStore {
    gender: string;                // Stores selected gender
    quizStart: boolean;            // Flag if quiz has started
    quizEnd: boolean;              // Flag if quiz has ended
    currentQuestionIndex: number;  // Tracks current question in quiz
    answers: string[];             // Stores user answers

    setGender: (newGender: string) => void;
    setQuizStart: (newQuizStart: boolean) => void;
    setQuizEnd: (newQuizEnd: boolean) => void;
    setAnswer: (answer: string) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
}

// Zustand global store for managing quiz state
export const useAppStore = create<AppStore>((set, get) => ({
    gender: '',
    quizStart: false,
    quizEnd: false,
    currentQuestionIndex: 0,
    answers: ['', '', '', '', '', ''],

    setGender: (newGender: string) => set({gender: newGender}),
    setQuizStart: (newQuizStart: boolean) => set({quizStart: newQuizStart}),
    setQuizEnd: (newQuizEnd: boolean) => set({quizEnd: newQuizEnd}),

    /* Save an answer for the current question */
    setAnswer: (answer: string) => {
        const {currentQuestionIndex} = get();
        set((state) => {
            const newAnswers = [...state.answers];
            newAnswers[currentQuestionIndex] = answer;
            return {answers: newAnswers};
        })
    },

    /* Go to next question, if within bounds */
    nextQuestion: () => {
        const {currentQuestionIndex} = get();
        if (currentQuestionIndex < 6) {
            set({currentQuestionIndex: currentQuestionIndex + 1})
        }
    },

    /* Go to previous question and clear its answer */
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

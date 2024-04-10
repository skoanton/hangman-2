import { WordContext } from "./WordContext"
import data from "../../data/words.json"
import { useReducer } from "react"

export const ACTION = {
    RANDOMIZEWORD: "RANDOMIZEWORD",
    ADDTOCURRENTGUEES: "ADDTOCURRENTGUESS"
}

export type Action = {
    type: string,
    payload: string
}

export type WordState = {
    word: string
    wordGuess: string
}

const randomizeReducer = (state: WordState, action: Action): WordState => {
    switch (action.type) {
        case ACTION.RANDOMIZEWORD:
            const newState = { ...state };
            data.categories.map((category) => {
                if (category.name === action.payload) {
                    const randomNumber = Math.floor(Math.random() * category.words.length)
                    newState.word = category.words[randomNumber];
                }
            })
            return newState;
        case ACTION.ADDTOCURRENTGUEES:
            return { ...state, wordGuess: state.wordGuess + action.payload };

        default:
            return state
    }
}

export const initalWordState: WordState = {
    word: "",
    wordGuess: ""
}

type ProviderProps = {
    children: React.ReactNode
}



const Provider = ({ children }: ProviderProps) => {

    const [state, dispatch] = useReducer(randomizeReducer, initalWordState)


    return (
        <WordContext.Provider value={{ state, dispatch }}>
            {children}
        </WordContext.Provider>
    )
}

export default Provider

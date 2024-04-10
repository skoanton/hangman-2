import { WordContext } from "./WordContext"
import data from "../../data/words.json"
import { useReducer } from "react"

export const ACTION = {
    RANDOMIZEWORD: "RANDOMIZEWORD",
    ADDTOCURRENTGUEES: "ADDTOCURRENTGUESS",
    REMOVE_LIFE: "REMOVE_LIFE"
}

export type Action = {
    type: string,
    payload?: string
}

export type WordState = {
    category: string
    word: string
    wordGuess: string
    life: number
    maxLife: number
}

const randomizeReducer = (state: WordState, action: Action): WordState => {
    switch (action.type) {
        case ACTION.RANDOMIZEWORD:
            const category = data.categories.find(category => category.name === action.payload);

            if (category) {
                const randomNumber = Math.floor(Math.random() * category.words.length)
                return { ...state, word: category.words[randomNumber].toLowerCase(), category: category.name }
            }
            return state;

        case ACTION.ADDTOCURRENTGUEES:
            return { ...state, wordGuess: state.wordGuess + action.payload.toLowerCase() };
        case ACTION.REMOVE_LIFE:
            return { ...state, life: state.life - 1 }
        default:
            return state
    }
}

export const initalWordState: WordState = {
    category: "",
    word: "",
    wordGuess: "",
    life: 10,
    maxLife: 10
}

type ProviderProps = {
    children: React.ReactNode
}



const Provider = ({ children }: ProviderProps) => {

    const [state, dispatch] = useReducer(randomizeReducer, initalWordState)
    initalWordState.maxLife = initalWordState.life;

    return (
        <WordContext.Provider value={{ state, dispatch }}>
            {children}
        </WordContext.Provider>
    )
}

export default Provider

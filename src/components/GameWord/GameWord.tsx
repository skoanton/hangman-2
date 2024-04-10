import { useContext } from "react";
import "./GameWord.scss"
import { WordContext } from "../ProviderContext/WordContext";

type GameWordProps = {

}

const GameWord = ({ }: GameWordProps) => {

    const { state } = useContext(WordContext);

    const letterWord = state.word.split("");
    console.log(letterWord)

    return (
        <section className="Game-word">
            {letterWord.map((letter, index) => {
                return (<div key={index} className="letter-box">
                    {state.word.toLowerCase().includes(state.wordGuess.toLowerCase()) && state.wordGuess.includes(letter.toLowerCase()) ? <p id={letter}>{letter.toUpperCase()}</p> :
                        <p id={letter}></p>
                    }

                </div>)
            })}

        </section>
    )
}

export default GameWord;

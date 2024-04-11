import { useContext, useEffect, useState } from "react";
import "./GameWord.scss"
import { WordContext } from "../ProviderContext/WordContext";

type GameWordProps = {

}

const GameWord = ({ }: GameWordProps) => {

    const { state } = useContext(WordContext);

    const letterWord = state.word.split("");
    const [correctLetter, setCorrectLetter] = useState(false);
    console.log(letterWord)

    /*  useEffect(() => {
         setCorrectLetter(true);
 
         const timeout = setTimeout(() => {
             setCorrectLetter(false);
         }, 100)
 
         return () => clearTimeout(timeout);
     },) */



    return (
        <section className="Game-word">
            {letterWord.map((letter, index) => {
                return (<div key={index} className={`letter-box${state.wordGuess.includes(letter) ? " correct-guess" : ""}`}>
                    {state.wordGuess.includes(letter) ? <p id={letter}>{letter.toUpperCase()}</p> :
                        <p id={letter}></p>
                    }

                </div>)
            })}

        </section>
    )
}

export default GameWord;

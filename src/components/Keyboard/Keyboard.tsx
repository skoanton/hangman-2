import React, { useContext, useState } from "react";
import { keys } from "../../data/keys";
import "./Keyboard.scss"
import { WordContext } from "../ProviderContext/WordContext";
import { ACTION } from "../ProviderContext/Provider";
import WinLoseScreen from "../LoseScreen/WinLoseScreen";
import useSound from "use-sound";
import hoverSound from "../../assets/tap-notification-180637.mp3"
import correctSound from "../../assets/cute-level-up-2-189851.mp3";
import wrongSound from "../../assets/wrong-answer-129254.mp3";
type KeyboardProps = {}

const Keyboard = ({ }: KeyboardProps) => {

    const { state, dispatch } = useContext(WordContext)
    const [clickedKeys, setClickedKeys] = useState<string[]>([]);
    const [playHover] = useSound(hoverSound);
    const [playCorrect] = useSound(correctSound);
    const [playWrong] = useSound(wrongSound);
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {

        const currentLetter = event.currentTarget.id.toLowerCase();
        console.log(currentLetter);

        if (state.word.toLowerCase().includes(currentLetter) && !clickedKeys.includes(currentLetter)) {
            dispatch({ type: ACTION.ADDTOCURRENTGUEES, payload: currentLetter });
            playCorrect();
        }

        else {
            dispatch({ type: ACTION.REMOVE_LIFE })
            playWrong();
        }
        setClickedKeys([...clickedKeys, currentLetter]);


    }

    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
        playHover();
    }

    return (
        <>
            <article className="Keyboard">
                <section className="key-section">

                    {keys.map((key) => {
                        const isClicked = clickedKeys.includes(key.toLowerCase());
                        return (
                            <div onMouseEnter={isClicked ? undefined : handleMouseEnter} id={key} onClick={isClicked ? undefined : handleClick} key={key} className={`${isClicked ? "clicked" : "key-box"}`} >
                                {key}
                            </div>
                        )
                    })}
                </section>
            </article>

            {state.life <= 0 && <WinLoseScreen winConditionText="Game Over" />}

            {state.won && <WinLoseScreen winConditionText="You won" />}
        </>
    )
}

export default Keyboard

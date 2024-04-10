import { useContext, useState } from "react";
import { keys } from "../../data/keys";
import "./Keyboard.scss"
import { WordContext } from "../ProviderContext/WordContext";
import { ACTION } from "../ProviderContext/Provider";
type KeyboardProps = {}

const Keyboard = ({ }: KeyboardProps) => {

    const { state, dispatch } = useContext(WordContext)
    const [clickedKeys, setClickedKeys] = useState<string[]>([]);
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {

        const currentLetter = event.currentTarget.id.toLowerCase();
        if (state.word.toLowerCase().includes(currentLetter) && !clickedKeys.includes(currentLetter.toLowerCase())) {
            console.log("right letter");
            dispatch({ type: ACTION.ADDTOCURRENTGUEES, payload: currentLetter });
        }
        setClickedKeys([...clickedKeys, currentLetter]);
    }

    return (
        <article className="Keyboard">
            {keys.map((key) => {
                const isClicked = clickedKeys.includes(key.toLowerCase());
                return (
                    <div id={key} onClick={handleClick} key={key} className={`${isClicked ? "clicked" : "key-box"}`} >
                        {key}
                    </div>
                )
            })}
        </article>
    )
}

export default Keyboard

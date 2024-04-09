import {keys} from "../../data/keys";
import "./Keyboard.scss"
type KeyboardProps = {}

const Keyboard = ({}:KeyboardProps) => {
    return (
        <article className="Keyboard">
            {keys.map((key) => {
                return (
                    <div className="key-box">
                        <p>{key}</p>
                    </div>
                )
            })}
        </article>
    )
}

export default Keyboard

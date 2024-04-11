import { useContext } from "react";
import Button from "../Button/Button"
import "./WinLoseScreen.scss";
import { WordContext } from "../ProviderContext/WordContext";
import { ACTION } from "../ProviderContext/Provider";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import losingSound from "../../assets/error-4-199275.mp3";
import winningSound from "../../assets/game-level-complete-143022.mp3";
type WinLoseScreenProps = {
    winConditionText: string
}

const WinLoseScreen = ({ winConditionText }: WinLoseScreenProps) => {

    const { state, dispatch } = useContext(WordContext)
    const nav = useNavigate();
    const [playLosing] = useSound(losingSound);
    const [playWinning] = useSound(winningSound);
    const handleClick = () => {
        console.log("reseting")
        dispatch({ type: ACTION.RESET })
        nav("/categoryMenu")
    }

    if (state.won) {
        playWinning();
    }
    else {
        playLosing();
    }

    return (
        <section className="WinLose-screen">
            <section className="title-section">
                <h2>{winConditionText}</h2>
            </section>
            <section className="button-section">
                <Button text="Play again" onHandleClick={handleClick} navigate={false} menu={true} />
            </section>
        </section>
    )
}

export default WinLoseScreen

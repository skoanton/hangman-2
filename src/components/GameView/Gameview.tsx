import GameWord from "../GameWord/GameWord"
import Header from "../Header/Header"
import Keyboard from "../Keyboard/Keyboard"
import "./GameView.scss"
type GameviewProps = {}

const Gameview = ({ }: GameviewProps) => {
    return (
        <>
            <Header gameView={true} />
            <section className="Game-view">
                <GameWord />
                <Keyboard />
            </section>
        </>
    )
}

export default Gameview

import Button from "../Button/Button";
import "./Header.scss"

const GameViewButtonSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        <path d="M5 12H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        <path d="M5 17H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
    </svg>
);

const MenuButtonSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z" fill="#33363F" />
    </svg>
)

type HeaderProps = {
    gameView: boolean;
};

const Header = ({ gameView }: HeaderProps) => {
    return (
        <header>
            {gameView ? (
                <article className="gameView">
                    <section className="left-header">
                        <Button smallCircle={false} svg={<GameViewButtonSVG />} />
                        <h2>Category</h2>
                    </section>
                    <section className="right-header">
                        <h2>Lifebar----------</h2>
                        <h2>❤️</h2>
                    </section>
                </article>) : (
                <article className="menu">
                    <Button smallCircle={true} svg={<MenuButtonSVG />} />
                    <h2>Pick a Category</h2>

                </article>
            )

            }

        </header>
    );
};

export default Header;

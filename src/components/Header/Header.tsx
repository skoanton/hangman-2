import Button from "../Button/Button";
import "./Header.scss"

const ButtonSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        <path d="M5 12H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        <path d="M5 17H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
    </svg>
);

type HeaderProps = {};

const Header = ({ }: HeaderProps) => {
    return (
        <header>
            <section className="left-header">
                <Button smallCircle={false} svg={<ButtonSVG />} />
                <h2>Category</h2>
            </section>
            <section className="right-header">
                <h2>Lifebar----------</h2>
                <h2>❤️</h2>
            </section>
        </header>
    );
};

export default Header;

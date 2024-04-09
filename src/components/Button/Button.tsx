import "./Button.scss"

type ButtonProps = {
    menu?: boolean;
    text?: string;
    smallCircle?: boolean;
    svg?: JSX.Element;
    onHandleClick: () => void;
}

const Button = ({ menu, text, smallCircle, svg, onHandleClick }: ButtonProps) => {
    return (
        <>
            <button onClick={onHandleClick} className={`button ${menu ? "menu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>
        </>
    )
}

export default Button

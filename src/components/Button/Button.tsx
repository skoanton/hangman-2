import "./Button.scss"

type ButtonProps = {
    menu?: boolean;
    text?: string;
    smallCircle?: boolean;
    svg?: JSX.Element;
}

const Button = ({ menu, text, smallCircle, svg }: ButtonProps) => {
    return (
        <>
            <button className={`button${menu ? " menu" : ""} ${smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text}</button>
        </>
    )
}

export default Button

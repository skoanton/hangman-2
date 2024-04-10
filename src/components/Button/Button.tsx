import { useContext } from "react";
import { WordContext } from "../ProviderContext/WordContext";
import "./Button.scss"
import { useNavigate } from "react-router-dom"
import { ACTION } from "../ProviderContext/Provider";
type ButtonProps = {
    menu?: boolean;
    text?: string;
    smallCircle?: boolean;
    svg?: JSX.Element;
    onHandleClick?: () => void;
    navigate: boolean
    page?: string
    randomizeWord?: boolean
}

const Button = ({ menu, text, smallCircle, svg, onHandleClick, navigate, page, randomizeWord }: ButtonProps) => {
    const nav = useNavigate();
    const { dispatch } = useContext(WordContext);

    const handelNavigate = () => {
        if (page) {
            nav(page);
        }

    }

    return (
        <>
            {navigate && randomizeWord && text ? (
                <button onClick={() => { handelNavigate(); dispatch({ type: ACTION.RANDOMIZEWORD, payload: text }) }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            ) : navigate ?
                (
                    <button onClick={handelNavigate} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>
                ) :
                <button onClick={onHandleClick} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            }
        </>
    )
}

export default Button

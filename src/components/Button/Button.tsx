import React, { useContext } from "react";
import { WordContext } from "../ProviderContext/WordContext";
import "./Button.scss"
import { useNavigate } from "react-router-dom"
import { ACTION } from "../ProviderContext/Provider";
import useSound from "use-sound";
import hoverSound from "../../assets/tap-notification-180637.mp3"
import clickSound from "../../assets/interface-124464.mp3";
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
    const [playClick] = useSound(clickSound);
    const handleOnClick = () => {

        playClick();
    }

    const handelNavigate = () => {
        if (page) {
            nav(page);
        }

    }

    return (
        <>
            {navigate && randomizeWord && text ? (
                <button onClick={() => { handleOnClick(); handelNavigate(); dispatch({ type: ACTION.RANDOMIZEWORD, payload: text }) }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            ) : navigate ?
                (
                    <button onClick={() => { handleOnClick(); handelNavigate(); }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>
                ) :
                <button onClick={() => { if (onHandleClick) onHandleClick(); handleOnClick(); }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            }
        </>
    )
}

export default Button;
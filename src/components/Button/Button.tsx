import React, { useContext } from "react";
import { WordContext } from "../ProviderContext/WordContext";
import "./Button.scss"
import { useNavigate } from "react-router-dom"
import { ACTION } from "../ProviderContext/Provider";
import useSound from "use-sound";
import hoverSound from "../../assets/menu-selection-102220.mp3"
import clickSound from "../../assets/click-button-app-147358.mp3";
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
    const [playHover] = useSound(hoverSound);
    const handleOnClick = () => {

        playClick();
    }

    const handelNavigate = () => {
        if (page) {
            nav(page);
        }

    }

    const handleMouseEnter = () => {
        playHover();
    }

    return (
        <>
            {navigate && randomizeWord && text ? (
                <button onMouseEnter={handleMouseEnter} onClick={() => { handleOnClick(); handelNavigate(); dispatch({ type: ACTION.RANDOMIZEWORD, payload: text }) }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            ) : navigate ?
                (
                    <button onMouseEnter={handleMouseEnter} onClick={() => { handleOnClick(); handelNavigate(); }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>
                ) :
                <button onMouseEnter={handleMouseEnter} onClick={() => { if (onHandleClick) onHandleClick(); handleOnClick(); }} className={`button ${menu ? "buttonMenu" : smallCircle ? "smallCircle" : "bigCircle"}`}>{svg} {text?.toUpperCase()}</button>

            }
        </>
    )
}

export default Button;
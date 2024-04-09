import "./MenuContainer.scss";

type MenuContainerProps = {
    children: React.ReactNode;
}

const MenuContainer = ({ children }: MenuContainerProps) => {
    return (
        <section className="Menu-container">
            {children}
        </section>
    )
}

export default MenuContainer

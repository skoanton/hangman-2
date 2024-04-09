import "./CategoryMenu.scss"
import Button from "../Button/Button";
import Header from "../Header/Header";
import MenuContainer from "../MenuContainer/MenuContainer";

type CategoryMenuProps = {}

const CategoryMenu = ({ }: CategoryMenuProps) => {
    return (
        <MenuContainer>
            <section className="Category-menu">
                <Header gameView={false}></Header>
                <section className="categories">
                    <Button menu={true} text="category 1" />
                    <Button menu={true} text="category 1" />
                    <Button menu={true} text="category 1" />
                    <Button menu={true} text="category 1" />
                </section>

            </section>

        </MenuContainer>
    )
}

export default CategoryMenu;

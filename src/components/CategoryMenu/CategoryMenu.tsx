import "./CategoryMenu.scss"
import Button from "../Button/Button";
import Header from "../Header/Header";
import MenuContainer from "../MenuContainer/MenuContainer";
import data from "../../data/words.json";
type CategoryMenuProps = {}


const CategoryMenu = ({ }: CategoryMenuProps) => {
    console.log(data.categories);
    return (
        <>
            <Header gameView={false}></Header>
            <section className="Category-menu">
                <section className="categories">
                    {data.categories.map((category) => {
                        return <Button randomizeWord={true} key={category.name} navigate={true} page="/gameView" menu={true} text={category.name} />
                    })}

                </section>

            </section>
        </>

    )
}

export default CategoryMenu;

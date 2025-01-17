import { useState } from "react";
import menu from "./data";
import MenuItems from "./MenuItems";
import Title from "./Title";
import Menu from "./Menu";
import Category from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Category
          categories={categories}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

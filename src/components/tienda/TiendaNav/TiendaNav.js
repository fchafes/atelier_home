"use client";

import styles from "./TiendaNav.module.sass";
import categories from "./categoriesData";

export const TiendaNav = ({ handleCategoryChange, selectedCategory }) => {
  return (
    <>
      <nav className={styles.TiendaNav}>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                selectedCategory === category.state_name ? styles.Underline : ""
              }
            >
              <button onClick={() => handleCategoryChange(category.state_name)}>
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

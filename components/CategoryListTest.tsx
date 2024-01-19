import "./styles/categoryList.css";

function CategoryListTest({ children, mobile = false } : {children: React.ReactNode, mobile?: boolean}) {

    return (
        <ul  className={mobile ? "category-list mobile-list" : "category-list"}>
            {children}
        </ul>
    );
}

export default CategoryListTest;
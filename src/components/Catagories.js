import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { asyncCategoryUpdate } from "../actions/CategoryAction";
import { useSelector, useDispatch } from "react-redux";

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCategoryUpdate());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    setCategories(e.target.value);
  };

  const categoryName = useSelector((state) => {
    return state.category;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryFormData = {
      name: [categories, ...categoryName],
    };
    dispatch(asyncCategoryUpdate(categoryFormData));
    setCategories([]);
  };

  const handleRemove = (removeItem) => {
    const removeCategory = categoryName.filter((category) => {
      return category !== removeItem;
    });
    dispatch(
      asyncCategoryUpdate({
        name: removeCategory,
      })
    );
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <h3>Add Catagories</h3>
          <input
            type="text"
            value={categories}
            onChange={handleCategoryChange}
          />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {categoryName.map((category, id) => {
            return (
              <li key={id}>
                {category}
                <button
                  onClick={() => {
                    handleRemove(category);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Catagories;

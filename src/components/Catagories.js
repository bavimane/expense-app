import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import {
  asyncCategoryList,
  asyncCategoryUpdate,
} from "../actions/CategoryAction";
import { useSelector, useDispatch } from "react-redux";

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCategoryList());
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
      name: [categories],
    };
    dispatch(asyncCategoryUpdate(categoryFormData));
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
        {categoryName.map((category) => {
          return <li>{category}</li>;
        })}
      </Container>
    </div>
  );
};

export default Catagories;

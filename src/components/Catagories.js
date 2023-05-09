import { useState, useEffect } from "react";
import { asyncCategoryUpdate } from "../actions/CategoryAction";
import { useSelector, useDispatch } from "react-redux";

//Styles
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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
    <>
      <Container className="category-section">
        <h3> Categories</h3>

        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Body>
              <Card.Title>Enter your category</Card.Title>

              <Form.Group className="mb-3" controlId="password.id">
                <Form.Control
                  type="text"
                  value={categories}
                  onChange={handleCategoryChange}
                  required
                />
              </Form.Group>

              <Button variant="dark" onClick={handleSubmit}>
                Add
              </Button>
            </Card.Body>
          </Card>
        </Form>

        <h5>Categories List</h5>

        <ul>
          {categoryName.map((category, id) => {
            return (
              <li key={id} className="category-list">
                <p>{category}</p>

                <Button
                  variant="danger"
                  onClick={() => {
                    handleRemove(category);
                  }}
                >
                  x
                </Button>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Catagories;

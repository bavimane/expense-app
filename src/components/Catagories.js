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
    <div>
      <Container className="category-section">
        <h3>Add Categories</h3>

        <Form onSubmit={handleSubmit}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>

              <Form.Group className="mb-3" controlId="password.id">
                <Form.Control
                  type="text"
                  placeholder="Enter your categories"
                  value={categories}
                  onChange={handleCategoryChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" onClick={handleSubmit}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </Form>

        <ul>
          {categoryName.map((category, id) => {
            return (
              <li key={id}>
                {category}

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
    </div>
  );
};

export default Catagories;

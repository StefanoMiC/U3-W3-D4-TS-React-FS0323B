import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { IBook } from "../interfaces/IBook";

const FetchComponent = () => {
  // l'interfaccia IBook arriva da una definizione esportata da "../interfaces/IBook"
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
      if (resp.ok) {
        const booksFromAPI = await resp.json();
        console.log(booksFromAPI);
        setBooks(booksFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chooseBook = (bookTitle: string) => {
    console.log("you chose " + bookTitle);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h2 className="text-center">Food Books presi da una fetch! :)</h2>
        </Col>
      </Row>
      <Row>
        {books.map(book => (
          <Col xs={12} md={4} lg={3} key={`id-${book.id}`}>
            <SingleBook book={book} chooseBook={chooseBook} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchComponent;

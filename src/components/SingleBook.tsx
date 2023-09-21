import { Button, Card } from "react-bootstrap";
import { IBook } from "../interfaces/IBook";

// SingleBookProps si riferisce all'oggetto props che il componente riceve, book è una proprietà interna all'oggetto props,
// va quindi definita assegnando l'interfaccia come valore della prop book

// chooseBook invece è una FUNZIONE, ed il tipo andrà definito con una definizione di tipo funzione con parametro stringa e void come tipo di ritorno
interface SingleBookProps {
  book: IBook;
  chooseBook: (bookTitle: string) => void;
}

const SingleBook = ({ book, chooseBook }: SingleBookProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={book.imageUrl} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="primary" onClick={() => chooseBook(book.title)}>
          {book.price}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

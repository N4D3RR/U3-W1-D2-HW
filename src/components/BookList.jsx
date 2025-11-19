import { Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {}
  render() {
    const books = this.props.books
    console.log("BOOKS PROP:", this.props.books)
    return (
      <Container className="mt-4">
        <Row className="g-4">
          {books.map((book) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList

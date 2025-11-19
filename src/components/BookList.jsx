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
          {books.map((libri) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} key={libri.asin}>
                <SingleBook book={libri} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList

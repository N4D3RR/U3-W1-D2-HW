import { Container, Row, Col } from "react-bootstrap"
import { Component } from "react"
import SingleBook from "./SingleBook"
import Form from "react-bootstrap/Form"

class BookList extends Component {
  state = {
    search: "",
  }
  render() {
    const books = this.props.books

    const filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
    console.log("LIBRI CERCATI:", filteredBooks)
    return (
      <Container className="mt-4">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cerca un libro"
            className="text-center"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value })
            }}
          />
        </Form.Group>
        <Row className="g-4">
          {/* {books.map((libri) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} key={libri.asin}>
                <SingleBook book={libri} />
              </Col>
            )
          })} */}
          {filteredBooks.map((libri) => {
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

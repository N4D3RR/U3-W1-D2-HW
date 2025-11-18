import { Container, Row, Col, Card } from "react-bootstrap"
import { Component } from "react"
import fantasy from "../data/books/fantasy.json"
import history from "../data/books/history.json"

class AllTheBooks extends Component {
  state = {}
  render() {
    return (
      <Container className="mt-4">
        <Row className="g-4">
          {fantasy.map((book) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} key={book.asin}>
                <Card className="h-100">
                  <Card.Img
                    className="h-75"
                    variant="top"
                    src={book.img}
                    alt={book.title}
                  />
                  <Card.Body className="h-25">
                    <Card.Title className="small text-truncate">
                      {book.title}
                    </Card.Title>
                    <Card.Text className="text-center small">
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "EUR",
                      }).format(book.price)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks

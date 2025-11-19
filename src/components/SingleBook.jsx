import { Card } from "react-bootstrap"
import { Component } from "react"
class SingleBook extends Component {
  state = {
    selected: false,
  }
  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected, //inverto il valore di selected con !
    })
    console.log("Valore selected:", this.state.selected)
  }
  render() {
    const book = this.props.book
    return (
      <Card
        className={this.state.selected ? "h-100 border border-danger" : "h-100"}
        onClick={this.toggleSelected}
      >
        <Card.Img
          className="h-75"
          variant="top"
          src={book.img}
          alt={book.title}
        />
        <Card.Body className="h-25">
          <Card.Title className="small text-truncate">{book.title}</Card.Title>
          <Card.Text className="text-center small">
            {new Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "EUR",
            }).format(book.price)}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook

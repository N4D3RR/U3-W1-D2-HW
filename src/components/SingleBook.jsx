import { Card } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
class SingleBook extends Component {
  state = {
    selected: false,
  }
  toggleSelected = () => {
    this.setState(
      {
        selected: !this.state.selected, //inverto il valore di selected con !
      },
      function () {
        console.log("Valore selected:", this.state.selected)
      }
    )
  }
  render() {
    const book = this.props.book
    return (
      <>
        <Card
          className={this.state.selected ? "border border-danger" : ""}
          onClick={this.toggleSelected}
        >
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body className=" p-1">
            <Card.Title className="small text-truncate">
              {book.title}
            </Card.Title>
            <Card.Text className="text-center small">
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
              }).format(book.price)}
            </Card.Text>
            {this.state.selected && (
              <div>
                <CommentArea elementId={book.asin} />
              </div>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook

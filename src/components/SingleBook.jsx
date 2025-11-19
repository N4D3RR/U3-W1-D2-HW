import { Card } from "react-bootstrap"

const SingleBook = function (props) {
  return (
    <Card className="h-100">
      <Card.Img
        className="h-75"
        variant="top"
        src={props.book.img}
        alt={props.book.title}
      />
      <Card.Body className="h-25">
        <Card.Title className="small text-truncate">
          {props.book.title}
        </Card.Title>
        <Card.Text className="text-center small">
          {new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(props.book.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook

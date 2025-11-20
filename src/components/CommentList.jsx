import { Component } from "react"
import SingleComment from "./SingleComment"

class CommentList extends Component {
  render() {
    return (
      <div>
        <h5>Recensioni:</h5>
        <ul className="p-0">
          {this.props.comments.map((commento) => (
            <SingleComment key={commento._id} comment={commento} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentList

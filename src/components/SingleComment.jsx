import { Component } from "react"

class SingleComment extends Component {
  render() {
    const comm = this.props.comment
    return (
      <li className="border rounded p-2 mb-2 list-unstyled">
        <div className="small my-1">{comm.comment}</div>
        <div className="small">Voto: {comm.rate}</div>
      </li>
    )
  }
}

export default SingleComment

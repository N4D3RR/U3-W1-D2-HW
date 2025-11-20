import { Component } from "react"
import CommentList from "./CommentList"

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    this.fetchComments()
  }

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.elementId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlN2Y0YmQ0NzAwMTU4NWIxZDEiLCJpYXQiOjE3NjM2NDk3NTEsImV4cCI6MTc2NDg1OTM1MX0.WiAzzkFiUqWITOkApDGGsSf2_yZ8mHFvByCE-Nem00o",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nella fetch")
        }
      })
      .then((commentsArray) => {
        this.setState({ comments: commentsArray })
        console.log(commentsArray)
      })
      .catch((error) => {
        console.log("ERRORE:", error)
      })
  }

  render() {
    return (
      <div className="mt-2">
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea

import "bootstrap/dist/css/bootstrap.min.css"
import BookNavBar from "./components/BookNavBar"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"

import Container from "react-bootstrap/Container"

import BookList from "./components/BookList"
import fantasy from "./data/books/fantasy.json"

const App = function () {
  return (
    <>
      <BookNavBar />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <BookFooter />
    </>
  )
}

export default App

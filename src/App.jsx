import "bootstrap/dist/css/bootstrap.min.css"
import BookNavBar from "./components/BookNavBar"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"

import Container from "react-bootstrap/Container"

import BookList from "./components/BookList"
import fantasy from "./data/books/fantasy.json"
import scifi from "./data/books/scifi.json"
import horror from "./data/books/horror.json"

const App = function () {
  return (
    <>
      <BookNavBar />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}

        <BookList books={horror} />
      </Container>
      <BookFooter />
    </>
  )
}

export default App

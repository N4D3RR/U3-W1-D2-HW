import "bootstrap/dist/css/bootstrap.min.css"
import BookNavBar from "./components/BookNavBar"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import Container from "react-bootstrap/Container"

const App = function () {
  return (
    <>
      <BookNavBar />
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container>
      <BookFooter />
    </>
  )
}

export default App

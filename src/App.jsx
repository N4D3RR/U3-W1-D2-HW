import "bootstrap/dist/css/bootstrap.min.css"
import BookNavBar from "./components/BookNavBar"
import BookFooter from "./components/BookFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <>
      <BookNavBar />
      <Welcome />
      <AllTheBooks />
      <BookFooter />
    </>
  )
}

export default App

import Blogs from "./components/Blogs/Blogs"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header></Header>
      <main className="flex justify-between items-start container mx-auto gap-5">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App

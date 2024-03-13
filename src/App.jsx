import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (id, blog) => {
    // console.log('bookmarks is adding soon', id);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <main className="flex justify-between items-start container mx-auto gap-5">
        <Blogs 
          handleBookmarks ={handleBookmarks}
        ></Blogs>
        <BookMarks 
          bookmarks ={bookmarks}
        ></BookMarks>
      </main>
    </>
  )
}

export default App

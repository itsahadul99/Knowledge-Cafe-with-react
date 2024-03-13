import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingmark, setReadingmark] = useState(0);

  // book mark handler
  const handleBookmarks = (id, blog) => {
    // console.log('bookmarks is adding soon', id);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // mark as reading handler
  const handlerMarkAsReading = (id,time) =>{

    setReadingmark(readingmark + time);

    // remove the bookmark when click mark as read
    
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark)
  }
  return (
    <>
      <Header></Header>
      <main className="flex justify-between items-start container mx-auto gap-5">
        <Blogs 
          handleBookmarks ={handleBookmarks}
          handlerMarkAsReading ={handlerMarkAsReading}
        ></Blogs>
        <BookMarks 
          bookmarks ={bookmarks}
          readingmark = {readingmark}
        ></BookMarks>
      </main>
    </>
  )
}

export default App



import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handalBookmark = (blog) => {
    const newbookmark = [...bookmarks, blog]
    setBookmarks(newbookmark)
  }


  return (
    <>
      <Header></Header>
      <div className='w-11/12 mx-auto md:grid grid-cols-3 gap-4 tex-c'>
        <Blogs handalBookmark={handalBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

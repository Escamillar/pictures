import { useState } from 'react'
import SearchBar from './components/searchBar.jsx'
import ImageList from './components/imageList.jsx'
import searchImages from './api'
import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
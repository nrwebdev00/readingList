import { useState, useContext } from 'react';
import BooksContext from '../context/books';

export default function BookCreate(){
  const [bookTitle, setBookTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleSubmit = ( e ) =>{
    e.preventDefault();
    createBook(bookTitle)
    setBookTitle('');
  }

  return(
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className='input'
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <button className='button' type='submit' >Create</button>
      </form>
    </div>
  )
}
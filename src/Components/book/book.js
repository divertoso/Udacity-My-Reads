import React from 'react'
import PropTypes from 'prop-types'
import './book.css'

const book = (props) => {
  return (

    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{backgroundImage: `url(${props.bookCover})` }}>

        </div>
        <div className="book-shelf-changer">
          <select
            defaultValue={props.bookShelf} 
            onChange={ (e)=> props.changeBookShelf( props.bookInstance,e.target.value,) }
          >
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.bookTitle}</div>
      <div className="book-authors">{props.bookAuthors}</div>
    </div>

  )
}

book.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthors: PropTypes.array,
  bookCover: PropTypes.string,
  bookShelf: PropTypes.string,
  changeBookShelf: PropTypes.func,
  bookId: PropTypes.string
}

export default book;
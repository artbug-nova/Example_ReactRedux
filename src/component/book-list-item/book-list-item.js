import React, { Fragment} from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) =>{
    const {name, author, price, coverImage} = book;
    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{name}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}</div>
                <button className="btn btn-info add-to-cart">Добавить в корзину</button>
            </div>
       
        </div>

    );
};

export default BookListItem;
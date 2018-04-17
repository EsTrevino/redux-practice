import React, { Component } from 'react';
/*Connects a React component to a Redux store.
connect is a facade around connectAdvanced,
providing a convenient API for the most common
use cases.*/
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  listBooks(){
    return this.props.books.map(book =>{
      return(
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          >
            {book.title}
        </li>
      )
    })
  }
  render(){
    return(
      <ul className="list-group">
        {this.listBooks()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

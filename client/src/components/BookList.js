import React, { Component } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

import { graphql } from "react-apollo";

class BookList extends Component {
  state = {
    selected: null
  };

  handleSelected = id => {
    this.setState({
      selected: id
    });
  };

  displayBoobs = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={this.handleSelected.bind(this, book.id)}>
            {book.name}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBoobs()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

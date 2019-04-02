import React, { Component } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

import { graphql } from "react-apollo";

class BookList extends Component {
  displayBoobs = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  render() {
    return (
      <div>
        <ul id="book">{this.displayBoobs()}</ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

import React, { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;

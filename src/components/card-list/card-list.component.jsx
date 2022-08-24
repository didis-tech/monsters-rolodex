import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log("monsters:", this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} key={`monster-${monster.id}`} />
        ))}
      </div>
    );
  }
}

export default CardList;

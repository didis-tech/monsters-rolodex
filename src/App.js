import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import users from "./users";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState(() => {
    //       return { monsters: users };
    //     })
    //   );
    this.setState(() => {
      return { monsters: users };
    });
  }
  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      }
      // () => {
      //   console.log(searchField);
      //   console.log(this.state);
      // }
    );
  };
  render() {
    // console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className={"monster-search-box"}
          placeholder={"Search Monsters"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

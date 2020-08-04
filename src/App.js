import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./Components/card-list/card-list.component";
import { Searchbox } from "./Components/searchBox/searchBox.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Abhinav's Monsters</h1>
        <Searchbox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

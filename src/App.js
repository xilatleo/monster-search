import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>       
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      <div className="App">
        <input
          onChange={e => this.setState({ searchField: e.target.value })}
          type="search"
          placeholder="search monster"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

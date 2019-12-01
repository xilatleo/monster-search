import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css"
import SearchBox from "./components/search-box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>       
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      <div className="App">
        <h1>Monsterdex</h1>
        <SearchBox  
        placeholder="search monster"
        handleChange= {this.handleChange}
        />
       
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

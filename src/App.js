import React, { Component } from 'react';
import './styles/App.css';

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        <form></form>
      </div>
    );
  }
}

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      name: '',
      email: '',
      phone: '',
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };
  render() {
    if (this.state.editing) {
      return (
        <div className="information">
          <h2>Information</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="name">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="information">
          <h2>Information</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <p>{this.state.name}</p>
            <label htmlFor="email">Email: </label>
            <p>{this.state.email}</p>
            <label htmlFor="name">Phone: </label>
            <p>{this.state.phone}</p>
            <button type="submit">Edit</button>
          </form>
        </div>
      );
    }
  }
}

class Cv extends Component {
  render() {
    return (
      <div>
        <h1>CV</h1>
        <Information />
        <Education />
        <button onClick={window.print}>Print</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cv />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
// provides unique id for keys
import uniqid from 'uniqid';

class SchoolItem extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">School name:</label>
        <input
          id="name"
          onChange={this.props.handleChange}
          value={this.props.school.name}
        ></input>
      </form>
    );
  }
}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [
        {
          name: '',
          title: '',
          date: '',
          id: uniqid(),
          number: 0,
        },
      ],
    };
  }

  // SCHOOL COMPONENT

  // edits inputs
  handleChange = (event, school) => {
    const number = school.number;
    const value = event.target.value;
    const key = event.target.name;
    const newArray = this.state.schools;
  };

  // EDUCATION COMPONENT

  //  creates new school
  handleClick = (event) => {
    this.setState({
      schools: this.state.schools.concat({
        name: '',
        title: '',
        date: '',
        id: uniqid(),
        number: this.state.schools.length,
      }),
    });
  };

  render() {
    const schools = this.state.schools.map((school) => (
      <SchoolItem
        key={school.id}
        school={school}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div className="education">
        <h2>Education</h2>
        <ul>{schools}</ul>
        <button onClick={(event) => this.handleClick(event)}>
          Add new school
        </button>
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
    // target name is made the same as the appropriate object keys
    const key = event.target.name;
    this.setState({
      [key]: value,
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
            <button type="submit">Save</button>
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

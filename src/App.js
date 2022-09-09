import React, { Component } from 'react';
import './styles/App.css';
// provides unique id for keys
import uniqid from 'uniqid';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };
  handleDelete = () => {
    this.props.jobHandleDelete(this.props.job);
  };
  handleChange = (event) => {
    this.props.jobHandleChange(event, this.props.job);
  };
  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={this.props.job.companyName}
            onChange={this.handleChange}
          />
          <label htmlFor="positionTitle">Position Title:</label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={this.props.job.positionTitle}
            onChange={this.handleChange}
          />
          <label htmlFor="mainTasks">Main tasks:</label>
          <input
            type="text"
            id="mainTasks"
            name="mainTasks"
            value={this.props.job.mainTasks}
            onChange={this.handleChange}
          />
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={this.props.job.date}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="companyName">Company Name:</label>
          <p>{this.props.job.companyName}</p>
          <label htmlFor="positionTitle">Position Title:</label>
          <p>{this.props.job.positionTitle}</p>
          <label htmlFor="mainTasks">Main tasks:</label>
          <p>{this.props.job.mainTasks}</p>
          <label htmlFor="date">Date:</label>
          <p>{this.props.job.date}</p>
          <button type="submit">Edit</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      );
    }
  }
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrJobs: [
        {
          companyName: '',
          positionTitle: '',
          mainTasks: [],
          date: '',
          id: uniqid(),
        },
      ],
    };
  }
  jobHandleDelete = (jobToDelete) => {
    const id = jobToDelete.id;
    this.setState({
      arrJobs: this.state.arrJobs.filter((job) => job.id !== id),
    });
  };
  jobHandleChange = (event, editedJob) => {
    const value = event.target.value;
    const key = event.target.name;
    const id = editedJob.id;
    const newJobs = this.state.arrJobs.map((job) => {
      if (job.id === id) {
        job[key] = value;
      }
      return job;
    });
    this.setState({
      arrJobs: newJobs,
    });
  };
  handleClick = (event) => {
    this.setState({
      arrJobs: this.state.arrJobs.concat({
        companyName: '',
        positionTitle: '',
        mainTasks: [],
        date: '',
        id: uniqid(),
      }),
    });
  };
  render() {
    return (
      <div className="Experience">
        <h1>Experience</h1>
        <div>
          {this.state.arrJobs.map((job) => {
            return (
              <Job
                job={job}
                key={job.id}
                jobHandleChange={this.jobHandleChange}
                jobHandleDelete={this.jobHandleDelete}
              />
            );
          })}
        </div>
        <button onClick={this.handleClick}>Add new Experience</button>
      </div>
    );
  }
}

class SchoolItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };
  handleDelete = () => {
    this.props.schoolDelete(this.props.school);
  };
  handleChange = (event) => {
    this.props.schoolInputChange(event, this.props.school);
  };
  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">School name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.props.school.name}
          ></input>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={this.props.school.title}
          ></input>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            onChange={this.handleChange}
            value={this.props.school.date}
          ></input>
          <button type="submit">Save</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">School name:</label>
          <p>{this.props.school.name}</p>
          <label htmlFor="title">Title:</label>
          <p>{this.props.school.title}</p>
          <label htmlFor="date">Date:</label>
          <p>{this.props.school.date}</p>
          <button type="submit">Edit</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      );
    }
  }
}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrSchools: [
        {
          name: 'Politechnika Poznanska',
          title: 'Architecture',
          date: '20.08.20015',
          id: uniqid(),
        },
      ],
    };
  }

  // SCHOOL COMPONENT
  // deletes school
  schoolDelete = (school) => {
    const id = school.id;
    const newSchools = this.state.arrSchools.filter((item) => item.id !== id);
    this.setState({
      arrSchools: newSchools,
    });
  };
  // edits inputs
  schoolInputChange = (event, school) => {
    const value = event.target.value;
    // // target name is made the same as the appropriate object keys
    const key = event.target.name;
    const id = school.id;
    const newSchools = this.state.arrSchools.map((item) => {
      if (item.id === id) {
        item[key] = value;
        return item;
      }
      return item;
    });
    this.setState({
      arrSchools: newSchools,
    });
  };

  // EDUCATION COMPONENT

  //  creates new school
  handleClick = () => {
    this.setState({
      arrSchools: this.state.arrSchools.concat({
        name: '',
        title: '',
        date: '',
        id: uniqid(),
      }),
    });
  };

  render() {
    const schools = this.state.arrSchools.map((school) => (
      <SchoolItem
        key={school.id}
        school={school}
        schoolInputChange={this.schoolInputChange}
        schoolDelete={this.schoolDelete}
      />
    ));
    return (
      <div className="education">
        <h2>Education</h2>
        <ul>{schools}</ul>
        <button onClick={this.handleClick}>Add new school</button>
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
        <Experience />
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

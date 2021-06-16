import React from "react";
import nextId from "react-id-generator";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit({
      title: this.state.title,
      description: this.state.description,
      done: false,
      id: nextId(),
    });
  };

  render() {
    return (
      <div className="inputs">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="title"
              onChange={this.handleChange}
              name="title"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="description"
              onChange={this.handleChange}
              name="description"
            />
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}

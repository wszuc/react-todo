import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "all" };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.addFilter(e.target.value);
  };
  render() {
    return (
      <div>
        <form>
          <select
            className="filter"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="all">all</option>
            <option value="to do">to do</option>
            <option value="done">done</option>
          </select>
        </form>
      </div>
    );
  }
}

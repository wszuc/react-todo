import React from "react";
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/solid.min.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
    this.handleDone = this.handleDone.bind(this);
  }
  toggleDone() {
    console.log(this.state.done);
    if (this.state.done) {
      return (
        <i onClick={this.handleDone} className="fas fa-check-circle done"></i>
      );
    } else {
      return <i onClick={this.handleDone} className="fas fa-check-circle"></i>;
    }
  }
  handleDone(e) {
    this.setState({ done: !this.state.done });
    this.props.markAsDone(this.props.id);
  }
  render() {
    return (
      <article className="card">
        <section className="panel">
          <i
            onClick={() => this.props.handleDelete(this.props.id)}
            className="fas fa-trash"
          />
          {this.toggleDone()}
        </section>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </article>
    );
  }
}

export default Card;

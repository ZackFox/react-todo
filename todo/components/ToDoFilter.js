import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'all' };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(e) {
    e.preventDefault();
    const filter = e.target.id;
    this.setState({ filter });
    this.props.doFilter(filter);
  }

  render() {
    return (
      <div>
        <a
          href="/"
          id="all"
          className={`btn ${this.state.filter === 'all'
            ? 'btn-success'
            : 'btn-warning'}`}
          onClick={this.filterHandler}
        >
          все
        </a>
        <a
          href="/"
          id="active"
          className={`btn ${this.state.filter === 'active'
            ? 'btn-success'
            : 'btn-warning'}`}
          onClick={this.filterHandler}
        >
          активные
        </a>
        <a
          href="/"
          id="completed"
          className={`btn ${this.state.filter === 'completed'
            ? 'btn-success'
            : 'btn-warning'}`}
          onClick={this.filterHandler}
        >
          выполненые
        </a>
      </div>
    );
  }
}

ToDoFilter.propTypes = {
  // addTask: PropTypes.func.isRequired,
};

export default ToDoFilter;

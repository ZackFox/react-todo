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
    const { filter } = this.state;

    return (
      <div className="filter">
        <a
          href="/"
          id="all"
          className={`btn-filter ${filter === 'all' ? 'btn-selected' : ''}`}
          onClick={this.filterHandler}
        >
          все
        </a>
        <a
          href="/"
          id="current"
          className={`btn-filter ${filter === 'current' ? 'btn-selected' : ''}`}
          onClick={this.filterHandler}
        >
          активные
        </a>
        <a
          href="/"
          id="completed"
          className={`btn-filter ${filter === 'completed'
            ? 'btn-selected'
            : ''}`}
          onClick={this.filterHandler}
        >
          выполненые
        </a>
      </div>
    );
  }
}

ToDoFilter.propTypes = {
  doFilter: PropTypes.func.isRequired,
};

export default ToDoFilter;

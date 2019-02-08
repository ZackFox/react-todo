import React from "react";
import { filters } from "../../reducers/filter";
import PropTypes from "prop-types";

import "./Filters.css";

const [ALL, CURRENT, COMPLETED] = filters;

const TaskFilter = ({ activeFilter, changeFilter }) => {
  const filterHandler = filter => e => {
    e.preventDefault();
    changeFilter(filter);
  };

  const isActive = (activeFilter, filter) => {
    return activeFilter === filter ? "active" : "";
  };

  return (
    <div className="filters">
      <a
        href="/"
        className={`filter-link ${isActive(activeFilter, ALL)}`}
        onClick={filterHandler(ALL)}
      >
        Все
      </a>
      <a
        href="/"
        className={`filter-link ${isActive(activeFilter, CURRENT)}`}
        onClick={filterHandler(CURRENT)}
      >
        Активные
      </a>
      <a
        href="/"
        className={`filter-link ${isActive(activeFilter, COMPLETED)}`}
        onClick={filterHandler(COMPLETED)}
      >
        Выполненные
      </a>
    </div>
  );
};

TaskFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
};

export default TaskFilter;

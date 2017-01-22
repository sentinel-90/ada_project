import React from 'react';

function TaskFilter(props) {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded list-type">
      <button className="btn btn-secondary active" type="button">Tasks for today</button>
      <button className="btn btn-secondary" type="button">Sprint</button>
      <button className="btn btn-secondary" type="button">All tasks</button>
    </nav>
  );
}

export default TaskFilter;

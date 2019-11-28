import React from 'react';

const Day = () => {
  return (
    <div className="day">
      <h2>DATE</h2>
      <form>
        <input type="text" placeholder="Add Task" />
        <button>Add</button>
        <ul>
          <li>task here</li>
        </ul>
      </form>
    </div>
  );
};

export default Day;

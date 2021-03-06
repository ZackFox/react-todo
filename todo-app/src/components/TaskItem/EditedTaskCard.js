import React from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

const EditedTaskCard = ({ text, onTyping, onSave, onCancel }) => {
  return (
    <div className="task-card edited">
      {/* <form onSubmit={onSave}> */}
      <input
        type="text"
        className="task-text"
        autoFocus
        autoComplete="off"
        onChange={onTyping}
        defaultValue={text}
      />
      <a href="/" className="task-cancel" title="отменить" onClick={onCancel}>
        &#x2716;
      </a>
      <a href="/" className="task-save" title="сохранить" onClick={onSave}>
        OK
      </a>
      {/* </form> */}
    </div>
  );
};

EditedTaskCard.propTypes = {
  test: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default EditedTaskCard;

import React from "react";

export default Component => {
  return ({ isLoading, ...props }) =>
    isLoading ? (
      <div className="task-list">
        <p className="loader">[ загрузка... ]</p>
      </div>
    ) : (
      <Component {...props} />
    );
};

import React from 'react';

const Group = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          {props.topic}
        </div>
      </div>
    </div>
  );
};

export default Group;
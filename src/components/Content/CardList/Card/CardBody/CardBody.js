import React from 'react';
import './CardBody.css';

const CardBody = props => {
  const { isEditMode, text, onChange } = props;
  return (
    <div className="card-body">
      {!isEditMode ? (
        <p className="card-text">{text}</p>
      ) : (
        <textarea defaultValue={text} className="input-text" onChange={onChange} />
      )}
    </div>
  );
};

export default CardBody;

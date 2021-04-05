import React from 'react';
import './CardBody.css';
import PropTypes from 'prop-types';

const CardBody = ({ isEditMode, text, onChange }) => (
  <div className="card-body">
    {!isEditMode ? (
      <p className="card-text">{text}</p>
    ) : (
      <textarea defaultValue={text} className="input-text" onChange={onChange} />
    )}
  </div>
);

CardBody.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
  isEditMode: PropTypes.bool,
};

export default React.memo(CardBody);

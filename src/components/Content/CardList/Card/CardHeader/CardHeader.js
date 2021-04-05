import React from 'react';
import './CardHeader.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

const CardHeader = props => {
  const {
    isEditMode,
    isReadOnly,
    isChecked,
    onSwitchEditMode,
    onChange,
    onSave,
    onCancel,
    onChecked,
    title,
  } = props;

  return (
    <div className="card-header">
      {!isEditMode ? (
        <>
          <h4 className="card-title">{title}</h4>
          <div className="buttons">
            {!isReadOnly && (
              <button type="button" className="btn-edit" onClick={onSwitchEditMode}>
                <FiEdit2 />
              </button>
            )}

            <input
              type="checkbox"
              className="checkbox"
              onChange={onChecked}
              checked={isChecked}
            />
          </div>
        </>
      ) : (
        <>
          <h4>
            <input
              defaultValue={title}
              className="input-title"
              type="text"
              onChange={onChange}
            />
          </h4>
          <div className="buttons">
            <button type="button" className="btn-save" onClick={onSave}>
              <FiSave />
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
              <FiXCircle />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  isEditMode: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  onSwitchEditMode: PropTypes.func.isRequired,
};

export default React.memo(CardHeader);

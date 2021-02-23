import React, { useState, useEffect } from 'react';
import './Card.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';

const Card = props => {
    const { title, text, readOnly } = props;

    const [isEdit, setEdit] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentText, setCurrentText] = useState(text);

    const [changedTitle, setChangedTitle] = useState(title);
    const [changedText, setChangedText] = useState(text);

    const switchColor = () => setChecked(!isChecked);

    const editMode = () => {
        setChangedTitle(currentTitle);
        setChangedText(currentText);

        setChecked(false);
        setEdit(!isEdit);
    };
    const setNulluble = () => {
        setChangedTitle(null);
        setChangedText(null);
    };

    const setReadOnlyMode = () => {
        setChangedTitle(null);
        setChangedText(null);
        setEdit(false);
    };
    const saveChanges = () => {
        setCurrentTitle(changedTitle);
        setCurrentText(changedText);
        setNulluble();
        setEdit(!isEdit);
    };

    const cancel = () => {
        setNulluble();
        setEdit(!isEdit);
    };
    useEffect(() => {
        readOnly ? setReadOnlyMode() : null;
    }, [readOnly]);
    return (
        <div
            style={{ backgroundColor: isChecked ? '#5E4BD8' : '#2C17B1' }}
            className="card"
        >
            <div className="card-header">
                {!isEdit || readOnly ? (
                    <h4 className="card-title">{currentTitle}</h4>
                ) : (
                    <h4>
                        <input
                            defaultValue={currentTitle}
                            className="input-title"
                            type="text"
                            onChange={event =>
                                setChangedTitle(event.target.value)
                            }
                        />
                    </h4>
                )}
                {!isEdit ? (
                    <div className="buttons">
                        {!props.readOnly && (
                            <button className="btn-edit" onClick={editMode}>
                                <FiEdit2 />
                            </button>
                        )}
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={isChecked}
                            onChange={switchColor}
                        />
                    </div>
                ) : (
                    <div className="buttons">
                        {props.readOnly && (
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={isChecked}
                                onChange={switchColor}
                            />
                        )}
                        {!props.readOnly && (
                            <button className="btn-save" onClick={saveChanges}>
                                <FiSave />
                            </button>
                        )}
                        {!props.readOnly && (
                            <button className="btn-cancel" onClick={cancel}>
                                <FiXCircle />
                            </button>
                        )}
                    </div>
                )}
            </div>

            <hr className="card-line" />

            <div className="card-body">
                {!isEdit || props.readOnly ? (
                    <p className="card-text">{currentText}</p>
                ) : (
                    <textarea
                        defaultValue={currentText}
                        className="input-text"
                        type="text"
                        onChange={event => setChangedText(event.target.value)}
                    />
                )}
            </div>
        </div>
    );
};

export default Card;

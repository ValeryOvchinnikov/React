import React, { useState } from 'react';
import './Card.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';

const Card = props => {
    const { title, text } = props;

    const [isEdit, setEdit] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentText, setCurrentText] = useState(text);

    const [changedTitle, setChangedTitle] = useState(title);
    const [changedText, setChangedText] = useState(text);

    const switchColor = () => setChecked(!isChecked);

    const editMode = () => {
        if (isEdit) {
            setChangedTitle(null);
            setChangedText(null);
        } else {
            setChangedTitle(currentTitle);
            setChangedText(currentText);
        }
        setChecked(false);
        setEdit(!isEdit);
    };

    const saveChanges = () => {
        setCurrentTitle(changedTitle);
        setCurrentText(changedText);
        editMode();
    };

    return (
        <div
            style={{ backgroundColor: isChecked ? '#5E4BD8' : '#2C17B1' }}
            className="card"
        >
            <div className="cardHeader">
                {!isEdit ? (
                    <>
                        <h4 classN ame="cardTitle">
                            {currentTitle}
                        </h4>
                        <div className="buttons">
                            <button className="btnEdit" onClick={editMode}>
                                <FiEdit2 />
                            </button>
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={isChecked}
                                onChange={switchColor}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <h4>
                            <input
                                defaultValue={currentTitle}
                                className="inputTitle"
                                type="text"
                                onChange={event =>
                                    setChangedTitle(event.target.value)
                                }
                            />
                        </h4>
                        <div className="buttons">
                            <button className="btnSave" onClick={saveChanges}>
                                <FiSave />
                            </button>
                            <button className="btnCancel" onClick={editMode}>
                                <FiXCircle />
                            </button>
                        </div>
                    </>
                )}
            </div>

            <hr className="cardLine" />

            <div className="cardBody">
                {!isEdit ? (
                    <p className="cardText">{currentText}</p>
                ) : (
                    <>
                        <div className="cardBody">
                            <textarea
                                defaultValue={currentText}
                                className="inputText"
                                type="text"
                                onChange={event =>
                                    setChangedText(event.target.value)
                                }
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;

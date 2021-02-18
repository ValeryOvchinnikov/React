import React, { useState } from 'react';
import './Card.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';

const Card = props => {
    const { title, text } = props;

    const [isEdit, setEdit] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const [currentTitle, setTitle] = useState(title);
    const [currentText, setText] = useState(text);

    const [changedTitle, setChangedTitle] = useState('');
    const [changedText, setChangedText] = useState('');

    const switchColor = () => setChecked(!isChecked);

    const editMode = () => {
        setChecked(false);
        setEdit(!isEdit);
        setChangedTitle(currentTitle);
        setChangedText(currentText);
    };

    const saveChanges = () => {
        if (changedTitle === currentTitle) {
            setChangedTitle('');
        } else {
            setTitle(changedTitle);
            setChangedTitle('');
        }
        if (changedText === currentText) {
            setChangedText('');
        } else {
            setText(changedText);
            setChangedText('');
        }
        setEdit(!isEdit);
    };
    const cancelChanges = () => {
        setChangedTitle('');
        setChangedText('');
        setEdit(!isEdit);
    };

    return (
        <div
            style={{ backgroundColor: isChecked ? '#5E4BD8' : '#2C17B1' }}
            className="card"
        >
            <div className="cardHeader">
                {!isEdit ? (
                    <>
                        <h4 className="cardTitle">{currentTitle}</h4>
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
                                value={changedTitle}
                                onChange={event =>
                                    setChangedTitle(event.target.value)
                                }
                            />
                        </h4>
                        <div className="buttons">
                            <button className="btnSave" onClick={saveChanges}>
                                <FiSave />
                            </button>
                            <button
                                className="btnCancel"
                                onClick={cancelChanges}
                            >
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
                                value={changedText}
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

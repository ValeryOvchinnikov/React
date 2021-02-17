import React, { useState } from 'react';
import './Card.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';

const Card = () => {
    const [isEdit, setEdit] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const [title, setTitle] = useState('Title');
    const [text, setText] = useState('Text');

    const [changedTitle, setChangedTitle] = useState('');
    const [changedText, setChangedText] = useState('');

    const switchColor = () => setChecked(!isChecked);

    const editMode = () => {
        setChecked(false);
        setEdit(!isEdit);
        setChangedTitle(title);
        setChangedText(text);
    };

    const saveChanges = () => {
        if (changedTitle === title) {
            setChangedTitle('');
        } else {
            setTitle(changedTitle);
            setChangedTitle('');
        }
        if (changedText === text) {
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
            {!isEdit ? (
                <>
                    <div className="cardHeader">
                        <h4 className="cardTitle">{title}</h4>
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
                    </div>

                    <hr className="cardLine" />

                    <div className="cardBody">
                        <p className="cardText">{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="cardHeader">
                        <h4>
                            <input
                                defaultValue={title}
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
                    </div>

                    <hr className="cardLine" />

                    <div className="cardBody">
                        <textarea
                            defaultValue={text}
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
    );
};

export default Card;

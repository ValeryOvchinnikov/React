import React, { PureComponent } from 'react';
import './CardHeader.css';
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi';

export default class CardHeader extends PureComponent {
    render() {
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
        } = this.props;
        return (
            <div className="card-header">
                {!isEditMode ? (
                    <>
                        <h4 className="card-title">{title}</h4>
                        <div className="buttons">
                            {!isReadOnly && (
                                <button
                                    type="button"
                                    className="btn-edit"
                                    onClick={onSwitchEditMode}
                                >
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
                            <button
                                type="button"
                                className="btn-save"
                                onClick={onSave}
                            >
                                <FiSave />
                            </button>
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={onCancel}
                            >
                                <FiXCircle />
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

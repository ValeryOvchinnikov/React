import React, { PureComponent } from 'react';
import './CardBody.css';

export default class CardBody extends PureComponent {
    render() {
        const { isEditMode, text, onChange } = this.props;
        return (
            <div className="card-body">
                {!isEditMode ? (
                    <p className="card-text">{text}</p>
                ) : (
                    <textarea
                        defaultValue={text}
                        className="input-text"
                        onChange={onChange}
                    />
                )}
            </div>
        );
    }
}

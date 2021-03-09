import React, { PureComponent } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default class Card extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            isChecked: false,
            title: this.props.title,
            text: this.props.text,
            changedTitle: '',
            changedText: '',
        };
        this.switchColor = this.switchColor.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
        this.changedTitleHandler = this.changedTitleHandler.bind(this);
        this.changedTextHandler = this.changedTextHandler.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.setNull = this.setNull.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
    }

    switchColor = () => {
        this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    };

    switchEditMode = () => {
        const { text, title, isChecked, isEditMode } = this.state;
        isChecked ? this.switchColor() : null;
        if (!isEditMode) {
            this.setState({ changedTitle: title });
            this.setState({ changedText: text });
        } else {
            this.setNull();
        }
        this.setState(prevState => ({ isEditMode: !prevState.isEditMode }));
    };

    changedTitleHandler = event => {
        this.setState({ changedTitle: event.target.value });
    };

    changedTextHandler = event => {
        this.setState({ changedText: event.target.value });
    };

    saveChanges = () => {
        const { changedText, changedTitle } = this.state;
        this.setState({
            title: changedTitle,
            text: changedText,
        });
        this.switchEditMode();
    };

    cancelChanges = () => {
        this.switchEditMode();
    };

    componentDidUpdate = () => {
        const { isReadOnly } = this.props;
        const { isEditMode } = this.state;
        isReadOnly && isEditMode ? this.cancelChanges() : true;
    };

    setNull = () => {
        this.setState({
            changedTitle: null,
            changedText: null,
        });
    };

    checkHandler = () => {
        this.props.checkedForDelete(this.props.id);
        this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    };

    render() {
        const { isChecked, title, isEditMode, text } = this.state;
        const { isReadOnly } = this.props;

        return (
            <div
                style={{
                    backgroundColor: isChecked ? '#5E4BD8' : '#2c17b1',
                }}
                className="card"
            >
                <CardHeader
                    title={title}
                    isEditMode={isEditMode}
                    isChecked={isChecked}
                    isReadOnly={isReadOnly}
                    onSave={this.saveChanges}
                    onCancel={this.cancelChanges}
                    onChange={this.changedTitleHandler}
                    onChecked={this.checkHandler}
                    onSwitchEditMode={this.switchEditMode}
                />
                <hr className="card-line" />
                <CardBody
                    text={text}
                    onChange={this.changedTextHandler}
                    isEditMode={isEditMode}
                />
            </div>
        );
    }
}

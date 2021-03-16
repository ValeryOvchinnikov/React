import React, { Component } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default class Card extends Component {
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
  }

  switchColor = () => {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  };

  switchEditMode = () => {
    const { text, title, isChecked, isEditMode } = this.state;
    !isChecked || this.switchColor();
    if (!isEditMode) {
      this.setState({ changedTitle: title, changedText: text });
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
    if (isReadOnly && isEditMode) {
      this.cancelChanges();
    }
    return true;
  };

  setNull = () => {
    this.setState({
      changedTitle: null,
      changedText: null,
    });
  };

  checkHandler = () => {
    this.props.checkedForDelete(this.props.id);
    this.switchColor();
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

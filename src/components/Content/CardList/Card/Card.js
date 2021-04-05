import React, { PureComponent } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';
import CardContext from '../../../../context/card-context';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    const { id, title, text, selected } = this.props;
    this.state = {
      isEditMode: false,
      id,
      title,
      text,
      selected,
    };
  }

  componentDidUpdate = () => {
    const { isReadOnly } = this.context;
    const { isEditMode } = this.state;
    if (isReadOnly && isEditMode) {
      this.cancelChanges();
    }
    return true;
  };

  switchEditMode = () => {
    const { selected } = this.state;
    !selected || this.checkHandler();
    this.setState(prevState => ({ isEditMode: !prevState.isEditMode }));
  };

  changedTitleHandler = event => {
    this.setState({ title: event.target.value });
  };

  changedTextHandler = event => {
    this.setState({ text: event.target.value });
  };

  saveChanges = () => {
    const { id, title, text } = this.state;
    this.context.updateCardHandler(id, title, text);
    this.switchEditMode();
  };

  cancelChanges = () => {
    const { title, text } = this.props;
    this.setState({ title, text });
    this.switchEditMode();
  };

  switchColor = () => {
    this.setState(prevState => ({ selected: !prevState.selected }));
  };

  checkHandler = () => {
    const { selectCardHandler } = this.context;
    const { id } = this.state;
    selectCardHandler(id);
    this.switchColor();
  };

  render() {
    const { selected, title, isEditMode, text } = this.state;
    const { isReadOnly } = this.context;

    return (
      <div
        style={{
          backgroundColor: selected ? '#5E4BD8' : '#2c17b1',
        }}
        className="card"
      >
        <CardHeader
          title={title}
          isEditMode={isEditMode}
          isChecked={selected}
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
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  selected: PropTypes.bool,
};

Card.contextType = CardContext;
export default withLoadingDelay(Card);

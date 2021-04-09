import React, { PureComponent } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCard, selectCard } from '../../../../actions/actions';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';

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

  componentDidMount() {
    const { selected } = this.state;
    const { byId } = this.props;
    if (byId && selected) {
      this.checkHandler();
    }
  }

  componentDidUpdate = () => {
    const { isEditMode } = this.state;
    const { isReadOnly } = this.props;
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
    this.props.updateCard(id, title, text);
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
    const { id } = this.state;
    this.props.selectCard(id);
    this.switchColor();
  };

  render() {
    const { selected, title, isEditMode, text } = this.state;
    const { byId, dblClick, isReadOnly } = this.props;
    return (
      <div
        style={{
          backgroundColor: selected ? '#5E4BD8' : '#2c17b1',
        }}
        className={byId ? 'card-by-id card' : 'card'}
        onDoubleClick={!isEditMode ? dblClick : null}
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
  updateCard: PropTypes.func,
  selectCard: PropTypes.func,
  dblClick: PropTypes.func,
  isReadOnly: PropTypes.bool,
  byId: PropTypes.bool,
};

const mapStateToProps = state => ({
  isReadOnly: state.isReadOnly,
});

const mapDispatchToProps = {
  updateCard,
  selectCard,
};
export default connect(mapStateToProps, mapDispatchToProps)(withLoadingDelay(Card));

/*
 * @file component Deskmark
 */

import React, { PropTypes } from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

class Deskmark extends React.Component {

  componentDidMount() {
    this.props.actions.fetchEntryList();
  }

  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const items = state.items;
    const item = items.find(
      ({ id }) => id === selectedId
    );

    const content = isEditing ? (
      <ItemEditor
        save={actions.saveEntry}
        cancel={actions.cancelEdit}
        item={item}
      />
    ) : (
      <ItemShowLayer
        item={item}
        onEdit={actions.editEntry}
        onDelete={actions.deleteEntry}
      />
    );

    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">Deskmark App</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onClick={actions.createNewEntry} />
              <List items={items} onSelect={actions.selectEntry} />
            </div>
            <div className="col-md-8">
              {content}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Deskmark.propTypes = propTypes;

export default Deskmark;

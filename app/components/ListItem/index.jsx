import React, { PropTypes } from 'react';
import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function ListItem({ item, onSelect }) {
  let formatTime = '未知时间';
  if (item.time) {
    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
  }

  return (
    <a
      href="#"
      className="list-group-item item-component list-item"
      onClick={onSelect}
    >
      <span className="item-title">{item.title}</span>
      <span className="label label-default label-pill pull-xs-right time">
        {formatTime}
      </span>
    </a>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;

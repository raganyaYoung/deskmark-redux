import React, { PropTypes } from 'react';
import marked from 'marked';

import './style.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({ item, onEdit, onDelete }) {
  if (!item || !item.id) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    );
  }

  const content = marked(item.content);

  return (
    <div className="item-show-layer-component">
      <h2>{item.title}</h2>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="control-area">
        <button className="btn btn-primary" onClick={() => onEdit(item.id)}>编辑</button>
        <button className="btn btn-danger" onClick={() => onDelete(item.id)}>删除</button>
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;

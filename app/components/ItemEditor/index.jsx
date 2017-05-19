import React, { PropTypes } from 'react';
import './style.scss';

const propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  item: PropTypes.object,
};

class ItemEditor extends React.Component {
  render() {
    const { cancel, save } = this.props;
    const item = this.props.item || {
      title: '',
      content: '',
    };

    let onSave = () => {
      save({
        ...item,
        title: this.refs.title.value,
        content: this.refs.content.value,
      });
    };

    return (
      <div className="item-editor-component">
        <div className="edit-area">
          <input
            className="form-control"
            ref="title"
            placeholder="请填写标题(限15字以内)"
            maxLength="15"
            defaultValue={item.title}
          />
          <textarea
            className="form-control"
            ref="content"
            rows="5"
            placeholder="请填写内容"
            defaultValue={item.content}
          >
          </textarea>
        </div>
        <div className="control-area">
          <button
            type="button"
            className="btn btn-success"
            onClick={onSave}
          >
          {item.id ? '保存' : '创建'}
          </button>
          <button
            type="button"
            className="btn"
            onClick={cancel}
          >
          取消</button>
        </div>
      </div>
    );
  }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;

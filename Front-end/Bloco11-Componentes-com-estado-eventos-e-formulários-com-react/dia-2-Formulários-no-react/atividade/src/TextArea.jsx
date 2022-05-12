import React from 'react';

export default class TextArea extends React.Component {
  render() {
    const { nome, required, maxlength } = this.props;
    return (
      <label>
        {nome}
        <textarea
          name={nome}
          maxLength={maxlength}
          required={required}
        ></textarea>
      </label>
    );
  }
}

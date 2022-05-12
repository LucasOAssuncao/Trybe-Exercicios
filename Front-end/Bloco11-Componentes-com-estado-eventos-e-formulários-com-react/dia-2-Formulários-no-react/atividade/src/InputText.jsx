import React from 'react';

export default class InputText extends React.Component {
  render() {
    const { value, nome, type, maxlength, required, func } = this.props;
    return (
      <label htmlFor={nome}>
        {nome}
        <input
          value={value}
          type={type}
          onChange={func}
          name={nome}
          maxLength={maxlength}
          required={required}
        ></input>
      </label>
    );
  }
}

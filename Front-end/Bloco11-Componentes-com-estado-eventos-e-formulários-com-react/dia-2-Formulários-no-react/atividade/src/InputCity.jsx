import React from 'react';

export default class InputCity extends React.Component {
  render() {
    const { value, nome, type, maxlength, required, func } = this.props;
    return (
      <label htmlFor={nome}>
        {nome}
        <input
          type={type}
          value={value}
          name={nome}
          onBlur={func}
          onChange={func}
          maxLength={maxlength}
          required={required}
        ></input>
      </label>
    );
  }
}

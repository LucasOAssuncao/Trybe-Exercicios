import React from 'react';

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'RS',
  'SC',
  'SP',
  'SE',
  'TO'
]

export default class InputStates extends React.Component {
  render() {
    const { nome, required } = this.props;
    return (
        <label>{nome}
      <select required={required}>
       {states.map((state) => <option value={state}> {state} </option>)}
      </select>
      </label>
    );
  }
}

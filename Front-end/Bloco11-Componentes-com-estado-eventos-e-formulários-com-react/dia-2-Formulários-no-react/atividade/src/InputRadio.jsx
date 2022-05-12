import React from 'react';

export default class InputRadio extends React.Component {
    render() {
        const {casa, apartamento} = this.props;
        return (
            <>
            <label htmlFor='casa'>{casa}
                <input name={casa} value={casa} type="radio"></input>
            </label>
             <label htmlFor='apartamento'>{apartamento}
                <input name={casa} value={apartamento} type="radio"></input>
            </label>
            </>
        )
    }
}
import React from "react";


export default class Button extends React.Component {
    render() {
        const { type, func } = this.props;
        return (
            <button className={type} onClick={func} >{type}</button>
        )
    }
}
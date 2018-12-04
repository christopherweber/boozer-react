import React from 'react'
// import { Button } from 'react-bootstrap';

export default class Search extends React.Component {
    render() {
        return (
        <form className="search-bar">
            <label></label>
            <input onChange={(e) => this.props.onChangeHandler(e)}name="input" placeholder="🔍"></input>
        </form>
        )
    }
}
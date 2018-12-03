import React from 'react'
// import { Button } from 'react-bootstrap';

export default class Search extends React.Component {
    render() {
        return (
        <form >
            <label>Search: </label>
            <input onChange={(e) => this.props.onChangeHandler(e)}name="input"></input>
            <button>Search</button>
        </form>
        )
    }
}
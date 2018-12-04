import React from 'react';

export default class ProportionsForm extends React.Component {

  render() {
    return (
      <div>
        <label>Ingredient Name: </label>
        <input
          type="text"
          name="ingredientName"
          id={this.props.id + "-ingredientName"}
          onChange={(e) => this.props.handleProportions(e)}
          value={this.props.ingredientName ? this.props.ingredientName : this.props.ingredient_name}
        />

        <label>Amount: </label>
        <input
          type="text"
          name="quantity"
          id={this.props.id + "-quantity"}
          onChange={(e) => this.props.handleProportions(e)}
          value={this.props.quantity ? this.props.quantity :this.props.amount}
        />
        <button type="button" className="button-guys" onClick={this.props.handleClick}>Add</button>
        <button type="button" className="button-guys" id={this.props.id + "-delete-proportions"} onClick={this.props.deleteProportions}>Delete</button>
      </div>
    )
  }
}
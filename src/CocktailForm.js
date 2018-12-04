import React from 'react'
import ProportionsForm from './ProportionsForm'

export default class CocktailForm extends React.Component {
  state = {
    name: '',
    description: '',
    instructions: '',
    proportions: [{
      id: 1,
      ingredientName: '',
      quantity: ''
    }]
  }
  
  handleSubmit = (e, obj) =>{
    console.log(obj)
 
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: obj.name,
        description: obj.description,
        instructions: obj.instructions,
 
      })
    })
    .then(res => res.json())
    .then(newCocktail => {
        // set this new cocktail in state the cocktail list
        // iterate over proportions for each proportion -- 
        // call handle ingredient
        this.handleIngredient(newCocktail, obj)
    })
  }

  handleIngredient = (newCocktail, obj) => {
  fetch('http://localhost:3000/api/v1/ingredients', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: obj.proportions[0].ingredientName
    })
  })
  .then(res => res.json())
  .then(json => this.handleProportion(json, newCocktail, obj))
  }

  handleProportion = (ingredient, cocktail, obj) => {
    console.log(ingredient, cocktail, obj)
    fetch('http://localhost:3000/api/v1/proportions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount: obj.proportions[0].quantity,
        cocktail_id: cocktail.id,
        ingredient_id: ingredient.id
      })
    }).then(res => res.json())
    .then(()=> this.componentDidMount)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleProportions = (event, idx) => {
    const newIng = this.state.proportions.map((obj, objIdx)=> {
        if (idx !== objIdx) {
            return obj
        }
        return {...obj, [event.target.name]: event.target.value}
    })
    this.setState({ proportions: newIng})
  }
  
  handleClick = (event) => {
    this.setState({
      proportions:[
        ...this.state.proportions,
        {
          id: this.state.proportions.length+1,
          ingredientName: '',
          quantity: ''
        }
      ]
    })
  }

  deleteProportions = (event) => {
    let deleteProportion = this.state.proportions.find(proportion=>{
      return proportion.id === parseInt(event.target.id,10)
    })
    let newArray = this.state.proportions.filter(proportion=>{
      if (proportion.id !== deleteProportion.id) {
        return proportion
      }
    })

    this.setState({proportions:newArray})
  }  

  renderProportionsForm = () => {
    if (this.state.proportions) {
      return (
        this.state.proportions.map((p,i)=>{
          return (
            <ProportionsForm
            key={i+"-propsForm"}
            id={this.state.proportions.length}
            deleteProportions={this.deleteProportions}
            handleClick={this.handleClick}
            ingredientName={p.ingredientName}
            quantity={p.quantity}
            handleProportions={(e) => this.handleProportions(e, i)}
            />
          )
        })
      )
    }
  }
  

  render() {
      console.log(this.state)
    return (
      <div className="cocktail-form">
        <form onSubmit={(e) => this.handleSubmit(e, this.state)} >
        <h3>Create Cocktail</h3>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            onChange={(e) => this.handleChange(e)} 
            value={this.state.name}
          />
          
          <label>Description: </label>
          <input 
            type="text-field" 
            name="description" 
            onChange={(e) => this.handleChange(e)} 
            value={this.state.description} 
          />
          
          <label>Instructions: </label>
          <input 
            type="text-field" 
            name="instructions" 
            onChange={(e) => this.handleChange(e)} 
            value={this.state.instructions} 
          />
          
          <h4>Proportions:</h4>
          {this.renderProportionsForm()}
          <button type='submit' className="button-guys">Create Cocktail</button>
        </form>
      </div>
    )
  }
}
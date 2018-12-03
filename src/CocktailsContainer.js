import React from 'react';
import CocktailList from './CocktailList';
import Cocktail  from './Cocktail'
import CocktailDisplay from './CocktailDisplay'
import Search from './Search'

// is it working??

class CocktailsContainer extends React.Component {

    state = {
        cocktails: [],
        selectedCocktail: {},
        searchQuery: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/cocktails')
        .then(r => r.json())
        .then(r => this.setState({cocktails: r}), () => console.log(this.state.cocktails))
    }
    
    clickHandler = (e, cocktailObj) => {
        console.log(cocktailObj)
        this.setState({
            selectedCocktail: cocktailObj
        }) 
    }


    onChangeHandler = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    render(){
        const filteredCocktails = this.state.cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes(this.state.searchQuery)
        })

        return (
             <div>
                 <h1>Boozr</h1>
                 <Search onChangeHandler={this.onChangeHandler} />
                 <CocktailDisplay selectedCocktail={this.state.selectedCocktail}/>
                 <CocktailList cocktails={filteredCocktails} clickHandler={this.clickHandler} />
            </div>
        )

    }
}

// so whats wrong?
export default CocktailsContainer
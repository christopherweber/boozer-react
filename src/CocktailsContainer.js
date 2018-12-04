import React from 'react';
import CocktailList from './CocktailList';
import CocktailDisplay from './CocktailDisplay'
import Search from './Search'
import CocktailForm from './CocktailForm'


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
                 <div className="header-and-logo">
                     <img src="https://linsedition.files.wordpress.com/2016/04/beer-gif1.gif"></img>
                    <h1>Boozr</h1>
                 </div>
                 <Search onChangeHandler={this.onChangeHandler} />
                 <div className="container">
                    <CocktailList cocktails={filteredCocktails} clickHandler={this.clickHandler} />
                    <CocktailDisplay selectedCocktail={this.state.selectedCocktail}/>
                    <CocktailForm cocktails={this.state}/>
                </div>m
            </div>
        )

    }
}

export default CocktailsContainer
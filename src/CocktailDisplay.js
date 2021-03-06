import React from 'react'

class CocktailDisplay extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.selectedCocktail.name}</p>
                <p>{this.props.selectedCocktail.description}</p>
                <p>{this.props.selectedCocktail.instructions}</p>
            </div>
        )
    }
}

export default CocktailDisplay
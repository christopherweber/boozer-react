import React from 'react'
import Cocktail from './Cocktail'

class CocktailList extends React.Component {

    render(){
        return(
            <div>
               {
                   this.props.cocktails.map(cocktail => {
                       return <Cocktail cocktail={cocktail} clickHandler={this.props.clickHandler} />
                   })
               }
            </div>
        )
    }
}

export default CocktailList 

 
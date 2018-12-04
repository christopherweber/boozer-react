import React from 'react'

class Cocktail extends React.Component {
  constructor(props) {
    super(props)
  }
    render(){
        return(
            <div className="cocktail-container" onClick={(e) => {this.props.clickHandler(e, this.props.cocktail)}}>
                {
                    this.props.cocktail.name
                }
            </div>
        )
    }
}

export default Cocktail

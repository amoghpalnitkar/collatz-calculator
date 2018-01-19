import React, { Component } from 'react';
import InformationHeader from './InformationHeader';

class CollatzCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : '',
            steps : null
          }
    }
    handleCalculateClick = () => {
        const {number} = this.state;
        if(number === 0){
            return;
        }
        let step = 0;
        console.log(number);
        let value = number;
        for(let value = number; value !== 1; 
          value = value % 2 === 0 ? value/2 : 3*value + 1,step++) {
        }
        this.setState({steps : step});
      }
    render() { 
        console.log(this.state);
        const {steps} = this.state;
        return ( 
            <div>
                <InformationHeader />
                <div>
                    Enter your number
                    <input type="text" 
                    name='number'
                    onChange={({target}) => {this.setState({[target.name] : target.value})}}/>
                    <input 
                        type="button" 
                        value="calculate"
                        onClick={this.handleCalculateClick}
                        />
                </div>
                <p className="App-intro">
                {steps ? `Reached 1 in ${steps} steps` : null}
                </p>
            </div>
        )
    }
}
 
export default CollatzCalculator;

//https://xkcd.com/710/
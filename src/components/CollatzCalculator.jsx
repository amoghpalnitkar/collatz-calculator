import React, { Component } from 'react';
import Statistics from "./Statistics";
import InformationHeader from './InformationHeader';

class CollatzCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : '',
            steps : null,
            maxValue : 0,
            processingTime : null
          }
    }
    handleNumberChange = ({target}) => {
        if(Number(target.value)) {
            this.setState({[target.name] : target.value})
        } else {
            alert('enter only number');
        }
    }
    handleCalculateClick = () => {
        const {number,maxValue} = this.state;
        if(number === 0){
            return;
        }
        let step = 0;
        const start = performance.now();
        console.log(number);
        let value = number;
        let max = 0;
        for(let value = number; value !== 1; 
          value = value % 2 === 0 ? value/2 : 3*value + 1,step++) {
              if(value > max) {
                max = value;
              }
        }
        const end = performance.now();
        this.setState({steps : step,maxValue:max,processingTime:(end-start)});
      }
    render() { 
        console.log(this.state);
        const {steps,maxValue,processingTime} = this.state;
        return ( 
            <div>
                <InformationHeader />
                <div>
                    Enter your number
                    <input type="text" 
                    value={this.state.number}
                    name='number'
                    onChange={this.handleNumberChange}/>
                    <input 
                        type="button" 
                        value="calculate"
                        onClick={this.handleCalculateClick}
                        />
                </div>
                {
                    steps ? 
                    <Statistics 
                        steps={steps} 
                        maxValue={maxValue}
                        processingTime={processingTime}
                        /> : null
                }
            </div>
        )
    }
}
 
export default CollatzCalculator;

//https://xkcd.com/710/
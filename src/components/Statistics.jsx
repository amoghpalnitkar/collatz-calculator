import React, { Component } from 'react';

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {steps,maxValue,processingTime} = this.props;
        return ( 
            <div>
                Statistics :
                <div>
                    <div>
                        Unity was reached in : {steps} steps.
                    </div>
                    <div>
                        Max value reached was : {maxValue}.
                    </div>
                    <div>
                        Processing time : {processingTime}.
                    </div>
                    
                </div>
            </div>
        )
    }
}
 
export default Statistics;
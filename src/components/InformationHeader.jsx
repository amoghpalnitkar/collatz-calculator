import React, { Component } from 'react';

class InformationHeader extends Component {
    render() { 
        return ( 
            <div>
                <h2>
                    Collatz Conjecture
                </h2>
                <p style={{width:'60%',margin:'0 auto'}}>
                    The Collatz conjecture, named after Lothar Collatz of Germany, proposed 
                    the conjecture in 1937. It is often called the Simplest Impossible Problem. 
                </p>
                <p>
                    Begin with any positive integer n: 
                    Then each term is obtained from the previous term as follows
                    <br/>
                    If n is even, then n/2<br/>
                    If n is odd, then 3n + 1<br/>
                    The conjecture is that no matter what value of n, 
                    the sequence will always reach 1.
                </p>
            </div> 
        )
    }
}
 
export default InformationHeader;
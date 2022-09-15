import React, { PureComponent } from 'react'

export default class Purecomponents extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    updateCount = () => {
       this.setState({count:this.state.count +5})
    }

    render() {
        console.log("count purecomponent renders");
        return (
            <div>
                <h1>Purecomponents</h1>
                <h2>Purecomponents Count: {this.state.count}</h2>
                <strong>1)Prevents re-rendering of Component if props or state is the same <br/>
                2)Takes care of “shouldComponentUpdate” implicitly <br/>
                3)State and Props are Shallow Compared <br/>
                4)Pure Components are more performant in certain cases
                </strong>
                <br/>
                <pre>
                 Syntax:
                 
                 export default class Purecomponents extends PureComponent{
                    
                  }
                 </pre>
                <button onClick={this.updateCount}>Update Count</button>
            </div>
        )
    }
}

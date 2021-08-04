import React, { Component,PureComponent } from 'react'

class PureComponentClass extends PureComponent {
    constructor(){
        super();
        this.state = {
            name : 'React JS'
        };
    }
    changeName = () =>{
        this.setState({name:'React JS Pure Component'})
    }
    render() {
        console.log('-------- Re-render -------- ');
        const {name} = this.state;
        return (
            <div>
                <p>Name is : {name}</p>
                <button onClick={this.changeName}>Update Name</button>
            </div>
        )
    }
}

export default PureComponentClass;
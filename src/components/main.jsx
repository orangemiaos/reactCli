import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.jump1 = this.jump1.bind(this);
        this.jump2 = this.jump2.bind(this);
    }

    jump1() {
        this.props.history.push("/test");
    }

    jump2() {
        this.props.history.push("/game");
    }

    render() {
        return (
            <div style={{border: '1px solid #000'}}>
                <input type="button" value={'to test'} onClick={this.jump1}/>
                <input type="button" value={'to game'} onClick={this.jump2}/>
            </div>
        )
    }
}

export default Main;

import React from 'react'

export default function withTimer(WrapperComponent) {
    return class extends React.Component {
        state = { time: new Date() };
            componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                time: new Date()
            });
        }

        render() {
            return <WrapperComponent time={this.state.time}></WrapperComponent>
        }
    };
}
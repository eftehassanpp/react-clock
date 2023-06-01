import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };
    componentDidMount() {
        this.clockInterval = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }
    render() {
        // console.log(this.props.locale);
        return (
            <h1 className="heading">
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;
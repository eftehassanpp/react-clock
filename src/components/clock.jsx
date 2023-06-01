import React from 'react';
import Button from './button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };
    componentDidMount() {
        this.clockInterval = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }
    handleClick = (dateFormat) => {
        this.setState({ locale: dateFormat });
    };
    render() {
        console.log('Clock component rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                <Button
                    change={this.handleClick}
                    locale="en-US"
                    innerText="English Clock"
                />
                <Button
                    change={this.handleClick}
                    locale="bn-BD"
                    style={{ marginLeft: '1em' }}
                    innerText="Bengali Clock"
                />
            </div>
        );
    }
}

export default Clock;

import React from 'react';

export default class Form extends React.Component {
  state = {
    title: '',
  };

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div>
        <form>
          <input
            action=""
            type="text"
            placeholder="Enter Title"
            value={this.title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="textArea"></textarea>
        </form>
      </div>
    );
  }
}

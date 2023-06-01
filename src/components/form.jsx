import React from 'react';

export default class Form extends React.Component {
  state = {
    title: '',
    text: '',
    library: 'React',
    isAwesome: true,
  };

  handleChange = (event) => {
    if (event.target.type === 'text') {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.type === 'textarea') {
      this.setState({
        text: event.target.value,
      });
    } else if (event.target.type === 'select-one') {
      this.setState({
        library: event.target.value,
      });
    } else if (event.target.type === 'checkbox') {
      this.setState({
        isAwesome: event.target.checked,
      });
    }
  };
  submithandler = (event) => {
    const { title, text, library, isAwesome } = this.state;
    event.preventDefault();
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submithandler}>
          <input
            name="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            onChange={this.handleChange}
            value={text}
          ></textarea>
          <br />
          <select name="library" value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

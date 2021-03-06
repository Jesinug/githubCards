import axios from 'axios';
import React from 'react';
import './Form.css'

class Form extends React.Component {
    state = { username: ''}
    handleSubmit = async (event) => { 
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
      this.props.onSubmit(resp.data);
      this.setState({ username: '' });
    };

      render() {
        return (
          <form onSubmit={ this.handleSubmit }>
            <input
              type='text'
              placeholder='Type Github username'
              value = {this.state.username}
              onChange = { event => this.setState({ username: event.target.value })}
              required
              />
            <button>Add Card</button>
          </form>
        )
      }
};

  export default Form;

import React from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Form from './Components/Form/Form';

class App extends React.Component {
  state = {
    profiles: [],
  };
   addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <>
      <div className ="header">{this.props.title}<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github-icon" width="65"/></div>
      <div className ="subtitle">{this.props.subtitle}</div>
      <Form onSubmit={this.addNewProfile} />
      <CardList profiles={this.state.profiles} />
      </>
    );
  };
}

export default App

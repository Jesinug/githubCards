import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
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
      <div className ="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile} />
      <CardList profiles={this.state.profiles} />
      </>
    );
  };
}


export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    dog: '',
    isLoading: true,
  };

  componentDidMount() {
    this.objApi();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.includes('terrier')) {
      console.log('é verdade');
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dog } = this.state;
    localStorage.setItem('url', dog);
    const dogName = dog.split('/')[4];
    alert(dogName);
  }

  objApi = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dog: data.message, isLoading: false });
      });
  };

  buttonCLick = () => {
    this.setState({ isLoading: true });
    this.objApi();
  };

  render() {
    const { dog, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <span>AUAU</span> : <img src={dog} alt='catchoro' />}
        <button type='button' onClick={this.buttonCLick}>
          Doge
        </button>
      </div>
    );
  }
}

export default App;

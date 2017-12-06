import * as React from 'react';
import SearchInput from './search-input/SearchInput';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <SearchInput></SearchInput>
      </div>
    );
  }
}

export default App;

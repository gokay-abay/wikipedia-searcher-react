
import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import SearchComponent from './searchComponent'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Wikipedia Searcher</h1>
        <SearchComponent />
      </div>

    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
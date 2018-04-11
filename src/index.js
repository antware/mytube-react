// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
 
const API_KEY = 'AIzaSyC0G-_4aEib1gmxEPTsQ1I020SQA4kYwKU';
 
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
 
ReactDOM.render(<App />, document.querySelector('.container')); 
import React, { useState } from 'react';
import './App.css';
import { BookList } from './BookList';
import { MyBadge } from './MyBadge';
import { MyNavbar } from './MyNavbar';
import scifiBooks from './scifi.json';
import { SingleBook } from './SingleBook';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from './Login';
import { NotFound } from './NotFound';
import { BookDetails } from './BookDetails';


const App = () => {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     query: ''
  //   };
  // }
  const [query, setQuery] = useState('');

  const cambiaQuery = (newQuery) => {
    console.log("app ", newQuery);
    setQuery(newQuery);
  }
  // render () {
    // const query = this.state.query;
    return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <MyNavbar query={query} cambiaQuery={cambiaQuery}></MyNavbar>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/books/:asinId" element={<BookDetails />} />
          <Route path="/" element={<BookList books={scifiBooks} query={query}/>} />
          <Route path="/*" element={<NotFound/>} />
          {/* <MyBadge text="Testo Badge" color="primary"></MyBadge>
          <SingleBook book={scifiBooks[0]}></SingleBook> */}
          {/* <BookList books={scifiBooks} query={query}></BookList> */}
        </Routes>
      </Router>
    </div>

    )
  // }
}

export default App;

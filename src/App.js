import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

// Note:  in deployment, if you have your code sitting
// within a base folder, you need to tell React this
// and configure the basename within BrowserRouter
// The default is "/", but you might have a folder "my-app" 
// as an example the default -->  <BrowserRouter basename="/">
// with "my-app", you would need to configure things as follows:
/* 
    <BrowserRouter basename="/my-app">
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter> 
*/


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';

//import our instance of axios
//notice that the interceptor is on logging anything anymore.
// the interceptor is logging for global axios object, not the instance (which blog.js is using)
//import axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
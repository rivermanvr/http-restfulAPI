import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

//import our instance of axios
//notice that the interceptor is on logging anything anymore.
// the interceptor is logging for global axios object, not the instance (which blog.js is using)
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-post">New Post</Link></li>
              {/* <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quck-submit=true'
              }}>New Post</Link></li> */}
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={ Posts } />
        <Route path="/new-post" component={ NewPost } />
      </div>
    );
  }
}

export default Blog;
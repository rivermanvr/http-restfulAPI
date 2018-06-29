import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

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
            { /* You can set up a class name to represent "active"
                ...and change the item below to something other than the word "active" 
                you can also use --> activeStyle as an attribute as follows:
                activeStyle={{ 
                  color: 'fa923f',
                  textDecoration: 'underline'
                }}*/ }
              <li><NavLink
                to="/"
                exact
                activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
              {/* <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quck-submit=true'
              }}>New Post</NavLink></li> */}
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
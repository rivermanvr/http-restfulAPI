import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

//import our instance of axios
//notice that the interceptor is on logging anything anymore.
// the interceptor is logging for global axios object, not the instance (which blog.js is using)
//import axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
  state = {
    auth: false
  }

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
                to="/posts/"
                exact
                activeClassName="active">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
              {/* <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quck-submit=true'
              }}>New Post</NavLink></li> */}
            </ul>
          </nav>
        </header>
        {/* Switch finds the correct route and then stops looking. */}
        <Switch>

          { this.state.auth ? <Route path="/new-post" component={ NewPost } /> : null}

          <Route path="/posts" component={ Posts } />

          {/* moving the following Route to the Posts component */}
          {/* <Route path="/:id" exact component={ FullPost } /> */}
          {/* If you wanted to redirect the '/' route to /posts: you
              would use the following, but I am going to do it by
              using the Redirect component...
              <Route path="/" component={ Posts } /> */}

          {/* This next route catches all unknown routes and redirects them to /Posts */}
          {/* If I comment it out, we can show how to handle a 404 case */}
          {/* <Redirect from="/" to="/posts" /> */}

          
        </Switch>
      </div>
    );
  }
}

export default Blog;
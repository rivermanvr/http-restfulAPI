import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount () {
    console.log(this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Vince'
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log(response);
      })
      .catch(error => {
        // console.log(error)
        // this.setState({ error: true });
      });
    }

  postSelectedHandler = (id) => {
    // this is the programmatic way to navigate to  the detailed post.
    // using the push method you can add a page to the browser stack
    // this.props.history.push( '/posts/' + id ); <--can do this too.
    this.props.history.push({ pathname: '/posts/' + id });
    
  }

  render () {
    let posts = <p style={{textAlign: "center"}}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
        // Link will allow someone to click the post and get the post detail.
        //Commenting it out so I can illustrate a programmatic way to also link to post detail
        // note: need to move the key to the Post component as shown.
        // <Link to={ `/posts/${post.id}` } key={ post.id }>
          <Post
            key={ post.id }
            title={ post.title }
            author={ post.author }
            clicked={ () => this.postSelectedHandler(post.id) } />
        // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">
          { posts }
        </section>
        <Route path={ this.props.match.url + '/:id' } exact component={ FullPost } />
      </div>
    )
  }
}

export default Posts;

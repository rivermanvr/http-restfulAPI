import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount () {
      // A second example of using a guard (see blog.js for the first example)
      // you would:
      // 1. check to see if the user is authenticated
      // 2. use props.history to replace this page render with a redirected page
      //  if auth = false then this.props.history.replace('/posts');
    
      console.log(this.props);
    }

    postDataHandler = () => {
      const post = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      };
      axios.post(`/posts`, post)
        .then(response => {
          console.log(response);
          // this.setState({ submitted: true });
          //....
          // Instead of changing state, you can use the history object
          // with either push (which adds onto the history stack)
          // or with replace ( which replaces the last entry on the stack)
          this.props.history.push('/posts');
        })
    }
    render () {
      let redirect = null;
      if (this.state.submitted) {
        redirect = <Redirect to="/posts" />;        
      }
      return (
          <div className="NewPost">
            { redirect }
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
            <label>Author</label>
            <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button onClick={ this.postDataHandler }>Add Post</button>
          </div>
      );
    }
}

export default NewPost;
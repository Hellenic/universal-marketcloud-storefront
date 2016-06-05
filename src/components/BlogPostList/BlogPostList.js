import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import styles from './BlogPostList.scss';

@connect(state => ({
  posts: state.blog.data,
  error: state.blog.error,
  loading: state.blog.loading
}))
export default class BlogPostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
    count: PropTypes.number,
    error: PropTypes.string,
    loading: PropTypes.bool
  };

  render() {
    const { posts } = this.props;

    return (
      <div className={styles.container}>
        <Subheader className={styles.header}>Recent blogs</Subheader>
        {
          posts.map(post => (
            <Paper key={post.id} className={styles.paper} zDepth={2}>
              {post.title} by {post.author.name}
            </Paper>
          ))
        }
      </div>
    );
  }
}

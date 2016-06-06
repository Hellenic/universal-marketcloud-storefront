import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import styles from './BlogPost.scss';

@connect(state => ({
  posts: state.blog.posts,
  error: state.blog.error,
  loading: state.blog.loading
}))
export default class BlogPostList extends Component {
  static propTypes = {
    postId: PropTypes.string,
    posts: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool
  };

  render() {
    const { postId, posts } = this.props;
    // Note! postId is not actually and ID but the slug
    const post = posts.find(post => post.slug === postId);

    return (
      <div className={styles.container}>
        <Subheader>{post.title} - {post.date}</Subheader>
        {/* TODO Don't use that! It's dangerous. */}
        <div dangerouslySetInnerHTML={{ __html: post.text }} />
      </div>
    );
  }
}

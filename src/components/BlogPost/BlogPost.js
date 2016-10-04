import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import { Notification } from 'components';
import styles from './BlogPost.scss';

@connect(state => ({
  posts: state.blog.posts,
  error: state.blog.error
  // loading: state.blog.loading
}))
export default class BlogPost extends Component {
  static propTypes = {
    postId: PropTypes.string,
    posts: PropTypes.array,
    error: PropTypes.object
    // loading: PropTypes.bool
  };

  render() {
    const { postId, posts, error } = this.props;
    // Note! postId is not actually and ID but the slug
    const post = posts.find(post => post.slug === postId);

    return (
      <div className={styles.container}>
        <Notification error={error} />
        <Subheader>{post.title} - {post.date}</Subheader>
        {/* TODO Don't use that! It's dangerous. */}
        <div dangerouslySetInnerHTML={{ __html: post.text }} />
      </div>
    );
  }
}

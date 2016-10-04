import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Subheader from 'material-ui/Subheader';
import { GridList, GridTile } from 'material-ui/GridList';
import { Notification } from 'components';
import styles from './BlogPostList.scss';

@connect(state => ({
  posts: state.blog.posts,
  error: state.blog.error
  // loading: state.blog.loading
}), { pushState: push })
export default class BlogPostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
    error: PropTypes.object,
    pushState: PropTypes.func
    // loading: PropTypes.bool
  };

  render() {
    const { posts, pushState, error } = this.props;

    return (
      <div className={styles.container}>
        <GridList cellHeight={200} cols={3} className={styles.list}>
          <Subheader className={styles.header}>Recent blogs</Subheader>
          <Notification error={error} />
          {
            posts.map(post => (
              <GridTile
                key={post.id}
                title={post.title}
                subtitle={<span>by {post.author.name} <small>{post.author.description}</small></span>}
                titlePosition="top"
                className={styles.tile}
                onTouchTap={() => pushState(`/blog/${post.slug}`)}
                cols={1} rows={1}
              >
                <img src={post.author.image} alt={post.title} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    );
  }
}

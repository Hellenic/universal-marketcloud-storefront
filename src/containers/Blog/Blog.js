import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Header, Container, BlogPost, BlogPostList } from 'components';
import { asyncConnect } from 'redux-connect';
import { isLoaded, load as loadPosts } from 'redux/modules/blog';

@asyncConnect([{
  deferred: false,
  promise: ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      return dispatch(loadPosts());
    }
  }
}])
export default class Blog extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  render() {
    const { params } = this.props;

    return (
      <div>
        <Helmet title="Blog" />
        <Header title="Blog" />

        <Container>
          {params.postId ? <BlogPost postId={params.postId} /> : <BlogPostList />}
        </Container>
      </div>
    );
  }
}

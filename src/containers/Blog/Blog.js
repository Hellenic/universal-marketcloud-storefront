import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Header, Container, BlogPostList } from 'components';

import { asyncConnect } from 'redux-async-connect';
import { isLoaded, load as loadPosts } from 'redux/modules/blog';

@asyncConnect([{
  deferred: true,
  promise: ({ store: {dispatch, getState} }) => {
    if (!isLoaded(getState())) {
      return dispatch(loadPosts());
    }
  }
}])
export default class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet title="Blog"/>
        <Header title="Blog" />

        <Container>
          <BlogPostList count={5} />
        </Container>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import TestWrapper from './TestWrapper';

import { ProductGrid } from 'components';

describe('ProductGrid', () => {
  const mockStore = {
    products: {
      load: () => {},
      products: [],
      loaded: false
    }
  };

  const renderer = renderIntoDocument(<TestWrapper store={mockStore}><ProductGrid /></TestWrapper>);
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const text = dom.getElementsByTagName('strong')[0].textContent;
    expect(text).to.equal(mockStore.info.data.message);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

  it('should render the correct className', () => {
    const styles = require('components/ProductGrid/ProductGrid.scss');
    expect(styles.infoBar).to.be.a('string');
    expect(dom.className).to.include(styles.infoBar);
  });
});

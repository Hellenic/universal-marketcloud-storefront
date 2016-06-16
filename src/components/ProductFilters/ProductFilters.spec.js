import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TestWrapper from 'utils/TestWrapper';

import { ProductFilters } from 'components';
import { GridList, GridTile } from 'material-ui/GridList';

/* eslint-disable no-unused-expressions */
describe('ProductFilters', function() {
  const mockStore = {
    products: {
      load: () => {},
      products: [
        { id: 1, name: 'Product #1', images: [], price: 7.9, price_discount: 6.9, stock_type: 'status' },
        { id: 2, name: 'Product #2', images: [], price: 7.9, stock_type: 'status' }
      ],
      loaded: false
    }
  };

  const Testable = () => (<TestWrapper store={mockStore}><ProductFilters /></TestWrapper>);

  it('should render correctly', function() {
    const wrapper = mount(<Testable />);
    expect(wrapper).to.be.ok;
    expect(wrapper.find(ProductFilters)).to.be.ok;
  });

  it('should render a search bar', function() {
    const wrapper = mount(<Testable />).find(ProductFilters);
    expect(wrapper.find('#product-search')).to.have.length(1);
  });
});

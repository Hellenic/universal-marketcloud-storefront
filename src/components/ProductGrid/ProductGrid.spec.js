import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TestWrapper from 'utils/TestWrapper';

import { ProductGrid } from 'components';
import { GridList, GridTile } from 'material-ui/GridList';

/* eslint-disable no-unused-expressions */
describe('ProductGrid', function() {
  const mockStore = {
    products: {
      load: () => {},
      products: [
        { id: 1, name: 'Product #1', images: [], price: 7.9, price_discount: 6.9, stock_type: 'status' },
        { id: 2, name: 'Product #2', images: [], price: 7.9, stock_type: 'status' }
      ],
      filters: {},
      loaded: false
    }
  };

  const Testable = () => (<TestWrapper store={mockStore}><ProductGrid /></TestWrapper>);

  it('should render correctly', function() {
    const wrapper = mount(<Testable />);
    expect(wrapper).to.be.ok;
    expect(wrapper.find(ProductGrid)).to.be.ok;
  });

  it('should render the products as GridTiles', function() {
    const wrapper = mount(<Testable />).find(ProductGrid);
    expect(wrapper.find(GridList)).to.have.length(1);
    expect(wrapper.find(GridTile)).to.have.length(2);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TestWrapper from 'utils/TestWrapper';
import { AddCartButton } from 'components';
import IconButton from 'material-ui/IconButton';

describe('AddCartButton', function() {
  const mockStore = {
    cart: {
      id: 101,
      items: [
        { id: 1, name: 'Product #1', images: [], price: 7.9, price_discount: 6.9, stock_type: 'status' },
        { id: 2, name: 'Product #2', images: [], price: 7.9, stock_type: 'status' }
      ]
    }
  };
  const product = { id: 3, name: 'Product #3', images: [], price: 6.9, price_discount: 6.4, stock_type: 'status' }
  const Testable = () => (<TestWrapper store={mockStore}><AddCartButton product={product} /></TestWrapper>);

  it('should render correctly', function() {
    const wrapper = mount(<Testable />);
    expect(wrapper).to.be.ok;
    expect(wrapper.find(AddCartButton)).to.be.ok;
  });

  it('can add product to the cart as a item', function() {
    const wrapper = mount(<Testable />).find(AddCartButton);
    expect(mockStore.cart.items).to.have.length(2);
    wrapper.find(IconButton).simulate('click');
    // TODO Still in the middle of setting up proper mock
    expect(mockStore.cart.items).to.have.length(2);
  });
});

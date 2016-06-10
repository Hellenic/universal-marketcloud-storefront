import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Header } from 'components';

/* eslint-disable no-unused-expressions */
describe('Header', () => {
  const title = 'Hello world!';
  const subtitle = 'Chai is good.';

  it('should render correctly', () => {
    const wrapper = shallow(<Header title={title} />);
    return expect(wrapper).to.be.ok;
  });

  it('should render with correct title', () => {
    const wrapper = shallow(<Header title={title} />);
    expect(wrapper.find('h1').first().text()).to.equal(title);
  });

  it('should render with correct subtitle', () => {
    const wrapper = shallow(<Header title={title} subtitle={subtitle} />);

    expect(wrapper.find('h1').first().text()).to.equal(title);
    expect(wrapper.find('h2').first().text()).to.equal(subtitle);
  });

  it('should render with correct title but without subtitle', () => {
    const wrapper = shallow(<Header title={title} />);

    expect(wrapper.find('h1').first().text()).to.equal(title);
    expect(wrapper.find('h2')).to.have.length(0);
  });

  it('should render the correct className', () => {
    const wrapper = shallow(<Header title={title} subtitle={subtitle} />);
    const styles = require('components/Header/Header.scss');

    expect(wrapper.hasClass(styles.container)).to.be.true;
    expect(wrapper.find('h1').hasClass(styles.header)).to.be.true;
    expect(wrapper.find('h2').hasClass(styles.subheader)).to.be.true;
  });
});

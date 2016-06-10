import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { Header } from 'components';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';

describe('Header', () => {
  const title = "Hello world!";
  const subtitle = "Chai is good.";
  const renderer = renderIntoDocument(<Header title={title} subtitle={subtitle} />);
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const text = dom.getElementsByTagName('h1')[0].textContent;
    expect(text).to.equal(title);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('h2')[0].textContent;
    expect(text).to.equal(subtitle);
  });

  it('should render the correct className', () => {
    const styles = require('components/Header/Header.scss');
    expect(styles.header).to.be.a('string');
    expect(dom.className).to.include(styles.header);
  });
});

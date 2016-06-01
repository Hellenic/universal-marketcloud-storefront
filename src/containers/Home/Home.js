import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://github.com/hellenic/universal-marketcloud-storefront" target="_blank">
                <i className="fa fa-github" /> View on Github
              </a>
            </p>
            <GithubButton user="hellenic" repo="universal-marketcloud-storefront"
                          type="star" width={160} height={30} count large />
            <GithubButton user="hellenic" repo="universal-marketcloud-storefront"
                          type="fork" width={160} height={30} count large />

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/hkarkk" target="_blank">@hkarkk</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>

          <p>
            Here is a link to another page <Link to="/survey">Survey page</Link>
          </p>
        </div>
      </div>
    );
  }
}

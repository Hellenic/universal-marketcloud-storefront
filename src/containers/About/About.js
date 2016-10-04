import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import { Header, Container } from 'components';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  render() {
    const { showKitten } = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div>
        <Helmet title="About Us" />
        <Header title="About Us" />

        <Container>
          <p>This project was originally created by Hannu Kärkkäinen (<a href="https://twitter.com/hkarkk" target="_blank" rel="noopener noreferrer">@hkarkk</a>).</p>
          <p>
            Project is based on
            awesome <a href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank" rel="noopener noreferrer">react-redux-universal</a> boilerplate
            by <a href="https://twitter.com/erikras" target="_blank" rel="noopener noreferrer">@erikras</a>.
            You can read from there what&apos;s actually contained in this project as well.
          </p>

          <Subheader>Kitten</Subheader>
          <p>
            Psst! Would you like to see a kitten?
            <button style={{ marginLeft: 30 }} onClick={this.handleToggleKitten}>
              {showKitten ? 'No! Take it away!' : 'Yes! Please!'}
            </button>
          </p>

          {showKitten && <div><img alt="Soft kitty" src={kitten} /></div>}
        </Container>
      </div>
    );
  }
}

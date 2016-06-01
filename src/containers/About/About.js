import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us"/>

        <p>This project was originally created by Hannu Kärkkäinen
          (<a href="https://twitter.com/hkarkk" target="_blank">@hkarkk</a>), but has since seen many contributions
          from the open source community. Thank you to <a
            href="https://github.com/hellenic/universal-marketcloud-storefront/graphs/contributors"
            target="_blank">all the contributors</a>.
        </p>
        <p>
          Project is based on awesome
          <a href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">react-redux-universal</a>
          boilerplate by <a href="https://twitter.com/erikras" target="_blank">@erikras</a>.
          You can read from there what's actually contained in this project as well.
        </p>
        <h3>Mini Bar <span style={{color: '#aaa'}}>(not that kind)</span></h3>

        <p>Hey! You found the mini info bar! The following component is display-only. Note that it shows the same
          time as the info bar.</p>

        <MiniInfoBar/>

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}

import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Art2  extends Component {
  render () {
    return (
      <div className ='art-2-img'>
        <Grid>
          <Cell col={8}>
            <img src="https://lh3.googleusercontent.com/7aFiHAaTXBRPX7PnpV4ujoQck7RdrCd__9kRhBGugzyei4y9owMcA1Xal2NVWFw6_eV9eu3g-Cz_OdTD7xubbg_QqOxNVfoHSjCYQtcjAHG40ev_NlbAR035ZbwdY8EVPltrMqF1lg=w2400" alt = "art2"></img>
          </Cell>
          <Cell col = {4}>
            <p>Mountain Views - watercolor painting</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Art2;

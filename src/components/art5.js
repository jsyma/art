import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Art5  extends Component {
  render () {
    return (
      <div className ='art-5-img'>
        <Grid>
          <Cell col={8}>
            <img className = "art-5" src="https://lh3.googleusercontent.com/M2iraTBCm5KG5D2CQs1MNaNsOd6evd7r6qvxC5yqEwChzOBk1p0mqdLgsQ-JxpnKoOx_NGAChrsQV-HetEaBYJLTcxyB52mX6gxNcEWGX1bwQ0hlASBAnyZPNgWCEBSgfR8Ce1UPbw=w2400" alt = "art5"></img>
          </Cell>
          <Cell col = {4}>
            <p>Lemon Tree - Oil pastel and acrylic painting</p>
          </Cell>
        </Grid>
      </div>

    )
  }
}
export default Art5;

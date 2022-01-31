import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Art3  extends Component {
  render () {
    return (
      <div className ='art-3-img'>
        <Grid>
          <Cell col={8}>
            <img className = "art-3" src="https://lh3.googleusercontent.com/M_n8HJ7qruk8me_CCQBzozXTZJD69WDjV2ncIfhwvWLO3uaDXJNCd_VFxdTWZgMNdaHaQWXqogqAFGV1U7vnv9lSwq9eFbm0tT-eUreyBdzb7crP8JcYqfJES7rMrE1Y1nERSWiHZw=w2400" alt = "art3"></img>
          </Cell>
          <Cell col = {4}>
            <p>Reflections - A Chalk pastel piece</p>
          </Cell>
        </Grid>
      </div>

      )
    }
  }

export default Art3;

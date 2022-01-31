import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Art6  extends Component {
  render () {
    return (
      <div className ='art-6-img'>
        <Grid>
          <Cell col={8}>
            <img className = "art-6" src="https://lh3.googleusercontent.com/lW7VjiL9LBVysyw_SMa7GXY8EqwAauwyYUQK-ewWIfxZMN905iuGr5PUDHKJaUNW112mPggSoe1f4_RQoZDENqyjh9Knsl0Ofn7vh88vvTG-5svameIh68YurKmNKQ_GlI_Jbdgg_g=w2400" alt = "art6"></img>
          </Cell>
          <Cell col = {4}>
            <p>Pack of wolves - Drawn using sketching pencils</p>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Art6;

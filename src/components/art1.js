import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Art1  extends Component {
  render () {
    return (
      <div className ='art-1-img'>
        <Grid>
          <Cell col={8}>
            <img src = "https://lh3.googleusercontent.com/RsLC5xJ1a5j2I3wB3QhutoCaD4Ig44Ehizt4gwIucwV9qRIT3HWOtaiwkjnemBJ__MA8TUmmU5nirNWVAJ5CQV7KG62H7G0Vs7dhGV4cTXlkH6W_f0RVWygwkwQGLcof_HYEPwzG7w=w2400" alt = "art1"></img>
          </Cell>
          <Cell col = {4}>
            <p>Serenity - Portrait of a man drawn using sketching pencils</p>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Art1;

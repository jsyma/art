import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Art4  extends Component {
  render () {
    return (
      <div className ='art-4-img'>
        <Grid>
          <Cell col={8}>
            <img  className = "art-4" src="https://lh3.googleusercontent.com/3w3ywk8qrU4CfmdeeJWyhIw58DjgQ-chHUoSFsV5WXUOwzAU_lOSXhPaDXC0Ntp_5kgkbJMHaUHBRJxb00nfuzL9yhyGn5fbe9T7eUZQg3TcIyjdn2Daw9ZASHfdXfKIZ_Aw7G6oeg=w2400" alt ="art4"></img>
          </Cell>
          <Cell col = {4}>
            <p>Frosted acorns - An oil painting</p>
          </Cell>
        </Grid>
      </div>

    )
  }
}


export default Art4;

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';



class Artwork  extends Component {
  render () {
    return (
      <div  className = "art-grid" style = {{width:'auto', height: '188%'}}>
      <Grid>
        <Cell col={3}>
          <Tilt>
            <Link className = "artwork1" to="/art1">
                <img className = "art-1"  src="https://lh3.googleusercontent.com/RsLC5xJ1a5j2I3wB3QhutoCaD4Ig44Ehizt4gwIucwV9qRIT3HWOtaiwkjnemBJ__MA8TUmmU5nirNWVAJ5CQV7KG62H7G0Vs7dhGV4cTXlkH6W_f0RVWygwkwQGLcof_HYEPwzG7w=w2400" alt="art"></img>
            </Link>
          </Tilt>
        </Cell>
        <Cell col={1}></Cell>
        <Cell col={4}>
          <Tilt>
            <a href="./art2">
                <img    className = "art-2"  src="https://lh3.googleusercontent.com/7aFiHAaTXBRPX7PnpV4ujoQck7RdrCd__9kRhBGugzyei4y9owMcA1Xal2NVWFw6_eV9eu3g-Cz_OdTD7xubbg_QqOxNVfoHSjCYQtcjAHG40ev_NlbAR035ZbwdY8EVPltrMqF1lg=w2400"alt="art"></img>
            </a>
          </Tilt>
        </Cell>
        <Cell col={1}></Cell>
        <Cell col={3}>
          <Tilt>
            <a href="./art3">
                <img className = "art-3" src="https://lh3.googleusercontent.com/M_n8HJ7qruk8me_CCQBzozXTZJD69WDjV2ncIfhwvWLO3uaDXJNCd_VFxdTWZgMNdaHaQWXqogqAFGV1U7vnv9lSwq9eFbm0tT-eUreyBdzb7crP8JcYqfJES7rMrE1Y1nERSWiHZw=w2400"alt="art"></img>
            </a>
          </Tilt>
        </Cell>
        <Cell col={12}></Cell>
        <Cell col={3}>
          <Tilt>
            <a href="./art4">
                <img  className = "art-4" src="https://lh3.googleusercontent.com/3w3ywk8qrU4CfmdeeJWyhIw58DjgQ-chHUoSFsV5WXUOwzAU_lOSXhPaDXC0Ntp_5kgkbJMHaUHBRJxb00nfuzL9yhyGn5fbe9T7eUZQg3TcIyjdn2Daw9ZASHfdXfKIZ_Aw7G6oeg=w2400"alt="art"></img>
            </a>
          </Tilt>
        </Cell>
        <Cell col={2}></Cell>
        <Cell col={2}>
          <Tilt>
            <a href="./art5">

                <img className = "art-5" src="https://lh3.googleusercontent.com/M2iraTBCm5KG5D2CQs1MNaNsOd6evd7r6qvxC5yqEwChzOBk1p0mqdLgsQ-JxpnKoOx_NGAChrsQV-HetEaBYJLTcxyB52mX6gxNcEWGX1bwQ0hlASBAnyZPNgWCEBSgfR8Ce1UPbw=w2400"alt="art"></img>

            </a>
          </Tilt>
        </Cell>
        <Cell col={1}></Cell>
        <Cell col={4}>
          <Tilt>
            <a href="./art6">

                <img className = "art-6" src="https://lh3.googleusercontent.com/lW7VjiL9LBVysyw_SMa7GXY8EqwAauwyYUQK-ewWIfxZMN905iuGr5PUDHKJaUNW112mPggSoe1f4_RQoZDENqyjh9Knsl0Ofn7vh88vvTG-5svameIh68YurKmNKQ_GlI_Jbdgg_g=w2400"alt="art"></img>

            </a>
          </Tilt>
        </Cell>
      </Grid>
    </div>
    )
  }
}




export default Artwork;

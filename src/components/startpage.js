import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Link} from 'react-router-dom';

class Startpage extends Component {
  render () {
    return (
      <div>
        <Grid className="starting-grid">
        <Cell col={12}>
          <div className = "start-text">
            <p>
              Hello, my name is Jonathan Ma and i like creating things.
            </p>
          </div>
        </Cell>

          <Grid className = "start-bar" style = {{paddingTop: '1em', paddingBottom: '1em', paddingRight: '3em', width: '44%'}}>
            <div>
              <Link to = "/artwork">
                <img src="https://lh3.googleusercontent.com/SZ6ZsaALzR4_s0FwJyBuUSmV7JTjSyD05971EYB2D95Dv_9SWbOffAJg0Rm7ul4B2sx94Y7k66Zy5IC_hwH5KNEZFsZ-qDwKuQZE8Jkbp_4FN0Gj6T5VuM9DbZEbawNd62qBwUG4dA=w2400"
                     alt="articon"
                     width = '62px'
                     >
                </img>
              </Link>
            </div>
            <div>
              <Link to = "/photography">
                <img src = "https://i.pinimg.com/originals/8e/e9/10/8ee910c3153cb8f1a802a59337533e7a.png"
                     alt="photoicon"
                     width = '61px'>
                </img>
              </Link>
            </div>
            <div>
              <Link to = "/design">
                <img src = "https://i1.wp.com/clipground.com/images/neon-lamp-clipart-10.jpg"
                     alt="designicon"
                     width = '61px'>
                </img>
              </Link>
            </div>
          </Grid>

          <Cell className = "startpage-padding"col={12}>
            <div> </div>
          </Cell>
          <Cell col={3}></Cell>
          <Cell className = "contact-me" col={3}>
            <h1>contact me</h1>
          </Cell>
          <Cell className = "email-icon" col={1}>
          <h1>
            <a href = "mailto: johnnyma99@gmail.com">
              <img src = "https://i2.wp.com/newdesignfile.com/postpic/2014/12/green-mail-icon_247650.png"
                   alt="emailicon"
                   width = "77px">
              </img>
            </a>
          </h1>
          </Cell>
          <Cell className ="instagram-icon" col={1}>
          <h1>
            <a href = "https://instagram.com/okayjma">
              <img src = "https://toppng.com/public/uploads/thumbnail/instagram-logo-old-neon-light-blue-green-yellow-freetoe-neon-instagram-icon-11562874112jlfydwjwhk.png"
                   alt="instagramicon"
                   width = "77px">
              </img>
            </a>
          </h1>
          </Cell>
          <Cell col={3}></Cell>
          <Cell className = "left-cell" col={4}>
            <div>
              <img src="https://lh3.googleusercontent.com/TiNh__a3YjuPipgRzSSjTexVsV094FYs39Dnv0TFrupwjHPkr91BGd0X5buXUaDCFQePqNyNbS5UtltzapAVvsBZ98UP3PCWi-bDO7qeFqHW1BH7mBgjUG-eom8m1VBTs-7eYsu7nQ=w600-h315-p-k"
                   alt ="profile"
                   style = {{width: '100%'}}
                  />
            </div>
          </Cell>
          <Cell className = "right-cell" col={8}>
            <p>I'm a computer engineering student who has an interest in all kinds of art, I love drawing, painting, travelling and capturing memories on a camera.<br/><br/>
                  In my free time, I like to work on projects and focus on the processes required to acheive the end goal.
            </p>
          </Cell>
          <Cell className ="startpage-padding-two" col={12}>
            <div> </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Startpage;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Startpage from './startpage';
import Artwork from './artwork';
import Photography from './photography';
import Design from './design';
import Europe from './europe';
import Northamerica from './northamerica';
import Art1 from './art1';
import Art2 from './art2';
import Art3 from './art3';
import Art4 from './art4';
import Art5 from './art5';
import Art6 from './art6';


const Main = () => (
  <Switch>
    <Route exact path = "/" component={Startpage} />
    <Route path = "/artwork" component={Artwork} />
    <Route path = "/photography" component={Photography} />
    <Route path = "/design" component={Design} />
    <Route path = "/europe" component={Europe}/>
    <Route path = "/northamerica" component={Northamerica}/>
    <Route path = "/art1" component={Art1}/>
    <Route path = "/art2" component={Art2}/>
    <Route path = "/art3" component={Art3}/>
    <Route path = "/art4" component={Art4}/>
    <Route path = "/art5" component={Art5}/>
    <Route path = "/art6" component={Art6}/>
  </Switch>
)

export default Main;

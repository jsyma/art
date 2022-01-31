import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { Grid, Cell } from 'react-mdl';

class App extends Component {
  render () {
    return (
      <div className ="layout">
        <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'black'}} to = "/"><h1>Jonathan Ma</h1></Link>}>
            <Navigation className = "link-color">
                <Link className="artwork-link" to="/artwork"><h1>Artwork</h1></Link>
                <Link className="photography-link"to="/photography"><h1>Photography</h1></Link>
                <Link className = "design-link" to="/design"><h1> Design</h1></Link>
            </Navigation>
        </Header>
        <Drawer className = "drawer-style" title={<Link style={{textDecoration: 'none', color:'black', overflow: 'hidden'}} to = "/"><h1 className = "home">Home</h1></Link>}>
            <Navigation className = "navi">
              <Link className = "artwork-link2" to="/artwork"><p>Artwork</p></Link>
              <Link className ="photography-link2" to="/photography"><p>Photography</p></Link>
              <Link className = "design-link2"to="/design"><p>Design</p></Link>
              <Link className = "art1"to="/art1"><p>Art1</p></Link>
              <Link className = "europe"to="/europe"><p>Europe</p></Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>



</div>

    )
  }
}



export default App;

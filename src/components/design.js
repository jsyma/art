import React, { Component } from 'react';
import Tilt from 'react-tilt';

import { Link } from 'react-router-dom';

class Design extends Component {
    render() {
        return (
          <div className = "design-grid">
            <div className = "design-1" >
                <Tilt>
                  <Link to="/desole">
                      <img  src="https://lh3.googleusercontent.com/L1lN4Wx4Nz53r6EEUpUj8fltIDJUY1iKkvsBy4-F59Si3dBbfRrIQy5pdouT1IGGE80LzmxI0N5pPERFroT7STkW9GxAuC0t_NIQsvWmFFDGQUDw275QjphUlZ4BbA2ZFcVLQ6wQWw=w2400" alt="desole"></img>
                      <div className = "hover-design">désolé</div>
                  </Link>
                </Tilt>
            </div>
        </div>
        );
    }
};


export default Design;

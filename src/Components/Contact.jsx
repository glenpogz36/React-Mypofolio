import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import seattle from '../Assests/img/seattle.jpeg'

class Contact extends Component {
  render() {
    return (
      <div style={{ color: 'brown', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: "url(" + seattle + ")" }}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Glen Sale</h2>
            <div ></div>
            <p>“Not everyone fits into the typical workplace model. Some people have disabilities, familial responsibilities, or lack access to skills or transportation to get to the jobs that will pay them what they need. And some people just want to call their own shots!”</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list" style={{}}>
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'brown' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (206) 910-6531
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'brown' }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (253) 852-4647
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'brown' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    glen_sale@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'brown' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    glenpogz36
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

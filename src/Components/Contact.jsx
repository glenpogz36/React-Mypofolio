import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import bg from '../Assests/img/bg.jpg'

class Contact extends Component {
  render() {
    return (
      <div style={{ color: '#fff', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  backgroundImage: "url(" + bg + ")"  }}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Glen Sale</h2>
            <div ></div>
            <p>“Not everyone fits into the typical workplace model. Some people have disabilities, familial responsibilities, or lack access to skills or transportation to get to the jobs that will pay them what they need. And some people just want to call their own shots!”</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
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

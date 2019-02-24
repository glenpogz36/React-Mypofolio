import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import bg from '../Assests/img/bg.jpg'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + bg + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Comment</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>C#</Tab>
          <Tab>NODE JS</Tab>
          <Tab>ANGULAR</Tab>
          <Tab>REACT</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import github from '../Assests/img/github.png'
import { Link } from 'react-router-dom';






class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }



  toggleCategories() {
    //HTML&CSS

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '100px', width: '100', color: 'orange', height: '176px', backgroundImage: "url(" + github + ")" }} >Hello-World</CardTitle>
            <CardText>
              HTML Tutorial
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/glenpogz36/hello-world">Github</a></Button>
              <Button colored> <Link to="/comment"><Link to="/comment">COMMENT</Link></Link></Button>
              <Button colored><a href="https://github.com/glenpogz36/hello-world/blob/master/hello-world.html">Live Code</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )

      //C#

    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Child Development</CardTitle>
            <CardText>
              Child Development Timeline website geared toward parents to learn their child's development timeline from birth to 5 years old. The user needs to create an account to login and fill the form statistic information about their child. The result shows in line chart and parent can compare the result with other kids result by choosing specific parts of the form. Also parent can modify child's information.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/gulzatk/ChildDevelopment">Github</a></Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )

      //JS
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Pizza</CardTitle>
            <CardText>
              Create a webpage that allows customers to select there custom made pizza allowing them to input there info and total cost of their custom made pizza using Constructors, Array, Loops, and Objects
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/glenpogz36/Pizza-Project">Github</a></Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )

      //ANGULAR
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >NBA</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/glenpogz36/Angular-NBA">Github</a></Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored><a href="https://nba-glenpogz36.firebaseapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
    //REACT

    else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >My Porfolio</CardTitle>
            <CardText>
              Multiple components that renders different Routed page using state to manage, display, and collect dynamic datas
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/glenpogz36/React-Mypofolio">Github</a></Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', backgroundImage: "url(" + github + ")" }} >Test</CardTitle>
            <CardText>
              Test
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored><Link to="/comment">COMMENT</Link></Button>
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
          <Tab> JS</Tab>
          <Tab>ANGULAR</Tab>
          <Tab>REACT</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>





      </div >


    )
  }
}

export default Projects;

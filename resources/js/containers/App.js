import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {add,subtract,toggleLeftDrawer,toggleSnackBar,login,logout} from '../actions'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Route,Switch } from "react-router-dom";
import history from "../history";
import Question from './Question';
import QuestionCreate from './QuestionCreate';
import SurveyCreate from './SurveyCreate';
import Survey from './Survey';
import UserAdmin from './UserAdmin';
import SurveyImplementation from './SurveyImplementation';
import SurveyImplementationCreate from './SurveyImplementationCreate';
import SurveyImplementationEdit from './SurveyImplementationEdit';
import SurveyResult from './SurveyResult';
import SurveyEdit from './SurveyEdit';
import Dashboard from './Dashboard';
import MenuItemLink from '../components/Menuitemlink';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import SurveyTaskAnswer from './SurveyTaskAnswer';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import  Tooltip  from '@material-ui/core/Tooltip';
import Popover  from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Grid  from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MySnackbarContent from '../components/MySnackBarContent';
import Snackbar from '@material-ui/core/Snackbar';




const theme = createMuiTheme({
  palette: {
      primary: {
                  main: indigo[500],
                   },
      secondary: { main: pink[500],
                  },

    },
    typography: { useNextVariants: true },
  });

const drawerWidth = 245;
const styles = theme => ({
  root: {
    display: 'flex',

  },
  toolbar: {
    padding: '0px 24px 0px 80px', // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
    ...theme.mixins.toolbar,
    color:'#FFFFFF',
    height:48,
  },
  appBar: {
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'transparent',
    boxShadow:'none'

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
    
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: "auto",
    height: "100%",
    backgroundColor: 'transparent',
    borderStyle:'none'

  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7,
    },
  },
  appBarSpacer: theme.mixins.toolbar,

  content: {
    display: 'flex',
    flexGrow: 1,
    padding: '24px 10px 0px 0px',
    height: '91vh',
    marginTop: theme.spacing.unit * 6,
    justifyContent:'center',
    backgroundColor: '#657de9',
    overflow:'auto',
    },

  paperContent:{
    padding: theme.spacing.unit*3,
    marginBottom:'auto',
    width: '100%',
    minHeight:570
  },

  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  toolButton: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  toolButtonFirst: {
    marginLeft: 'auto',
    marginRight: theme.spacing.unit * 2,
  },
  profile : {
    width : 250,
    height : 'auto',
    padding : 10
  },
  avatar:{    
    color: '#fff',
    backgroundColor: '#3f51b5',
  },
  loadingGlobal:{
    zIndex:2000,
    position: 'fixed',
    top: 0,
    width:'100%',
    
  }
});

class AppComponent extends Component {

  state = {
    openMenuMore : false,
    anchorEl    : null,
    openProfile : false,
    anchorProfile : null
  }

  componentDidMount(){
      
  }
  handleDrawerOpen = () => {
    this.props.toggleLeftDrawer(true);
  };

  handleDrawerClose = () => {
    this.props.toggleLeftDrawer(false);
  };

  toolbarMoreClick = (e) => {
    this.setState({openMenuMore:true})
    this.setState({anchorEl:e.currentTarget})
  };

  logout = ()=>{
    this.props.logout()
  }

  openProfile = event =>{
    this.setState({
      anchorProfile: event.currentTarget,
    });
    
  }
  closeProfile = ()=>{
    this.setState({anchorProfile:null})
  }


  render() {
    let user = {emp_id:'',emp_name:''}
    if(this.props.loggedUser.emp_id) 
        user = this.props.loggedUser        
    else
      return <Redirect to="/" />
        
    
    const lockMenu = this.props.lockMenu
    let menuComponent = null
    if(lockMenu===false){
        menuComponent = <List>
                        <MenuItemLink to="/app/dashboard" role='adm' userRole={this.props.loggedUser.role} primary="Dashboard" icon={<DashboardIcon nativeColor='white'/>}/>
                        <MenuItemLink to="/app/question" role='adm' userRole={this.props.loggedUser.role} primary="Questions" icon={<FormatListBulleted nativeColor='white'/>}/>
                        <MenuItemLink to="/app/survey" role='adm' userRole={this.props.loggedUser.role} primary="Surveys" icon={<AssignmentIcon  nativeColor='white'/>}/>
                        <MenuItemLink to="/app/survey/implementation" primary="Surveys Implementation" icon={<AssignmentTurnedInIcon nativeColor='white'/>}/>
                        <MenuItemLink to="/app/survey/result" role='adm' userRole={this.props.loggedUser.role} primary="Survey Result" icon={<ShowChartIcon nativeColor='white'/>}/>
                        <MenuItemLink to="/app/user" role='adm' userRole={this.props.loggedUser.role} primary="User Administration" icon={<HowToRegIcon nativeColor='white'/>}/>                        
                        </List>
    }
    const { classes } = this.props;
    let renderTittleLeft =""
    let renderTittleRight =""
    let loadingIndicator = true===this.props.loadingGlobal?<LinearProgress color="secondary" className={classes.loadingGlobal}/>:""
    if(!this.props.isLeftDrawerOpen){
      renderTittleRight = <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classNames('animated slideInLeft')}
                      >
                        Survey System
                      </Typography>
    }else{
      renderTittleLeft = <Typography
                        component="h1"
                        variant="h5"
                        color="inherit"
                        noWrap
                        className={classNames('animated slideInRight')}
                        style={{margin:'5px 0px 0px 20px'}}
                      >
                        Survey System
                      </Typography>
    }



    return (

      
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar 
            position="absolute"
            className={classNames(classes.appBar, this.props.isLeftDrawerOpen && classes.appBarShift)}
          >
            <Toolbar variant='dense' disableGutters={!this.props.isLeftDrawerOpen} className={classes.toolbar}>
              
              {renderTittleRight}
              
              <div className={classes.toolButtonFirst}>
                <Tooltip title="Profile">
                <IconButton size="small" color="inherit" align="right" 
                                        
                    aria-owns={Boolean(this.state.anchorProfile) ? 'profile-popper' : undefined}
                    aria-haspopup="true"
                    onClick={this.openProfile}>                
                    <PersonIcon  />                
                </IconButton>
                </Tooltip>
                <Popover
                id="profile-popper"
                open={Boolean(this.state.anchorProfile)}
                anchorEl={this.state.anchorProfile} 
                onClose={this.closeProfile}               
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Paper className={classes.profile}>
                  <Grid container direction='column' justify='center' alignContent='center'>
                    <Grid container direction='row' alignItems='center' justify='space-between'>
                      <Avatar className={classes.avatar} color='primary'><FaceIcon/></Avatar>                    
                      <Typography variant="caption">{user.emp_id}</Typography>
                    </Grid>
                    <Grid container direction='row' justify='center'>
                      <Typography variant="h6" gutterBottom>{user.emp_name}</Typography>                    
                    </Grid>                    
                    <Button variant='contained'onClick={this.logout} color='secondary'>                    
                      Logout
                      <DirectionsRunIcon />
                    </Button>
                  </Grid>
                </Paper>
              </Popover>
              </div>
              
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.props.isLeftDrawerOpen && classes.drawerPaperClose),
            }}
            open={this.props.isLeftDrawerOpen}
          >
            <div className={classes.toolbarIcon}>
            {renderTittleLeft}
            
              {!this.props.isLeftDrawerOpen && <IconButton onClick={this.handleDrawerOpen}>
                <ChevronRightIcon nativeColor='white'/>
              </IconButton>}

              {this.props.isLeftDrawerOpen && <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon nativeColor='white'/>
              </IconButton>}

            </div>            
            {menuComponent}
          </Drawer>

          <main className={classes.content}>
          <Paper className={classes.paperContent}>
          <Switch>           
            <Route path="/app/dashboard" component={Dashboard}/>
            <Route exact path="/app/survey" render={(props) =>
              <Survey {...props}
                add={this.props.add}
                subtract={this.props.subtract}/>}/>
            <Route exact path="/app/survey/create" component={SurveyCreate}/>
            <Route exact path="/app/survey/implementation/create" component={SurveyImplementationCreate}/>
            <Route exact path="/app/survey/implementation/edit" component={SurveyImplementationEdit}/>
            <Route exact path="/app/survey/implementation" component={SurveyImplementation}/>
            <Route exact path="/app/survey/task/answer"  component={SurveyTaskAnswer}/>
            <Route exact path="/app/survey/edit"  component={SurveyEdit}/>
            <Route exact path="/app/survey/result"  component={SurveyResult}/>
            <Route exact path="/app/user"  component={UserAdmin}/>            
            <Route exact path="/app/question"  component={Question}/>
            <Route exact path="/app/question/create" component={QuestionCreate}/>            

          </Switch>
          </Paper>
          </main>
              
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={this.props.show_snack}
            autoHideDuration={6000}
            onClose={()=>this.props.toggleSnackBar({show:false,variant:this.props.snack_variant, message:this.props.snack_message})}
          >
            <MySnackbarContent 
                onClose={()=>this.props.toggleSnackBar({show:false,variant:this.props.snack_variant, message:this.props.snack_message})}
                variant={this.props.snack_variant}
                message={this.props.snack_message}/>
          </Snackbar>

        </div>

        <Popper open={this.state.openMenuMore} anchorEl={this.state.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-more"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={()=>this.setState({openMenuMore:false})}>
                  <MenuList>
                    <MenuItem onClick={()=>{}}>Profile</MenuItem>
                    <MenuItem onClick={()=>{}}>My account</MenuItem>
                    <MenuItem onClick={()=>{history.push('/')}}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {loadingIndicator}
        </MuiThemeProvider>
      

    );
  }
}

AppComponent.propTypes = {
  classes : PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    isLeftDrawerOpen: state.ui.isLeftDrawerOpen,
    allUser : state.user.allUser,
    show_snack : state.ui.show_snack,
    snack_message : state.ui.snack_message,
    snack_variant : state.ui.snack_variant,
    loadingGlobal : state.ui.loadingGlobal,
    lockMenu : state.ui.lockMenu,
    loggedUser : state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLeftDrawer: isOpen => dispatch(toggleLeftDrawer(isOpen)),
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    toggleSnackBar: data =>dispatch(toggleSnackBar(data)),
    login : loginData => dispatch(login(loginData)),
    logout : () => dispatch(logout())
  };
}

const App = connect(mapStateToProps,mapDispatchToProps)(AppComponent);

export default withStyles(styles)(App);

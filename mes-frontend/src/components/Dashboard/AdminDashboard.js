
import UserService from '../../services/UserService';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import StaffTable from '../tables/StaffTable';
import DepartmentTable from '../tables/DepartmentTable';
import RoleTable from '../tables/RoleTable';
import GradeTable from '../tables/GradeTable';
import './Dashboard.css'
import StaffForm from '../Forms/StaffForm'
import DepartmentForm from '../Forms/DepartmentForm'
import GradeForm from '../Forms/GradeForm'
import RoleForm from '../Forms/RoleForm'
import AdminServices from '../../services/AdminServices';




const userService = new UserService();
const adminServices = new AdminServices();


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#689241",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'grey',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  ChevronLeftIcon: {
    colorRendering: 'white'
  },
}));




export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [load, setLoad] = React.useState(true); //for page load
  const [staff, setStaff] = React.useState([]);


  React.useEffect(()=>{
    handleAdminLogin();
    handleGetAllStaff();
  },[]);

  const handleAdminLogin = () => {
    userService.getUser()
    .then(response => {
        if(response.data.system_role === 'super_admin'){ //change to !==
          window.location.href = '/dashboard';
        }else{
          // this.setState({staff: response.data});
          console.log(response.data);
        }
    })
    .catch(() =>{
        // props.history.push('/');
    })
  };

  const handleGetAllStaff = () => {
    adminServices.getAllStaff()
    .then(response => {
      handleSetStaff(response.data);
    })
    .catch((errors) => {
        console.log(errors);
    })
  };
  const handleSetStaff = (data) => {
    setStaff(data);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon color="action"/>
            ) : (
              <ChevronRightIcon color="action"/>
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Profile", "Traffic", "Notifications", "Reports"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
        {["Sign Out"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <PowerSettingsNewIcon  color="action"/> : <PowerSettingsNewIcon />}</ListItemIcon>
                <ListItemText primary={text} />                
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        <div
          className="modal fade"
          id="add-staff"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Staff
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <StaffForm />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="add-department"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Department
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <DepartmentForm />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="add-grade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Grade
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <GradeForm />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="add-role"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Role
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <RoleForm />
              </div>
            </div>
          </div>
        </div>


        <StaffTable staff={staff} />

        <div className="row other">
          <div className="col-md-12">
            <DepartmentTable />
          </div>
          {/* <div className="col-md-4">
            <RoleTable />
          </div>
          <div className="col-md-4">
            <GradeTable />
          </div> */}
        </div>
      </main>
    </div>
  );
}

import React,{Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import {BrowserRouter as Router,Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import List from '@material-ui/core/List';
import Dashpage from './Dashpage'







export const mainListItems = ( 
    
   <div>
   
      
    <ListItem component = {Link} to ="/">  
      
      <ListItemIcon>
         <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
   

    <ListItem component = {Link} to = "/additem" >
      <ListItemIcon>
        <AddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Item" />
    </ListItem>

    <ListItem component = {Link} to = "/useitem" >
      <ListItemIcon>
         <TouchAppIcon/>
      </ListItemIcon>
      <ListItemText primary="Use Item" />
    </ListItem>

    <ListItem component = {Link} to = "/deleteitem" >
      <ListItemIcon>
        <DeleteIcon/>
      </ListItemIcon>
      <ListItemText primary="Delete Item" />
    </ListItem>
    
    <ListItem component = {Link} to = "/alerts" >
      <ListItemIcon >
        <AddAlertIcon/>
      </ListItemIcon>
      <ListItemText primary="Alerts" />
    </ListItem>

   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>

);



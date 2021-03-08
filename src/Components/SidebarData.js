import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAlertIcon from '@material-ui/icons/AddAlert';


export const SidebarData =[
    { 
        title:"Dashboard",
        Icon:<DashboardIcon/>,
        link:"/Dashboard"

    },
    {title:"AddItem",
        Icon:<AddIcon/>,
        link:"/AddItem"
},

{ title:"UseItem",
Icon:<TouchAppIcon/>,
link:"/UseItem"


},
{
    title:"DeleteIcon",
    Icon:<DeleteIcon/>,
    link:"/DeleteIcon"

},
{
    title:"AddAlert",
        Icon:<AddAlertIcon/>,
        link:"/AddAlert"

},

];
    


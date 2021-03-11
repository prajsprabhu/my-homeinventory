import React,{useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import axios from 'axios';







function createData(id,inventorydate, name, quantity, units, storename,status) {
  return { id, inventorydate, name, quantity, units, storename,status};
}

const rows = [
  createData(0, '16 Mar, 2021', 'Rice', '1', '5 lb', 'Costco','opened'),
  createData(1, '16 Mar, 2021', 'Cornflakes', '2', '23 oz', 'Target','opened'),
  createData(2, '16 Mar, 2021', 'Lentils', '1', '2 lb', 'Suvidha','not yet'),
  createData(3, '16 Mar, 2021', 'Bread', '1', '20 oz', 'Target','opened'),
  createData(4, '15 Mar, 2021', 'Milk', '3', '3.78 L', 'Aldi','not yet'),
];
//const [rows,setRows] =useState([])


function preventDefault(event) {
  event.preventDefault();
}


      

const useStyles = makeStyles((theme)=>({
  seeMore: {
   '&:hover':{
      background:'transparent',
    marginTop: theme.spacing(3),
    },
    
  },
  icon:{
    borderRadius:3,
    width:16,
    height:16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
},
'input:hover ~ &': {
  backgroundColor: '#ebf1f5',
},
'input:disabled ~ &': {
  boxShadow: 'none',
  background: 'rgba(206,217,224,.5)',
},
},
checkedIcon: {
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
},
}));
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}




export default function Dashpage() {
  const classes = useStyles();
  //let items=[];
  let [items,setItems] = useState([]);
  useEffect(()=> {
   
    axios.get('http://localhost:9010/inventory')
    .then(res => {
      setItems(res.data)
       })
    .catch(err => {
      console.log(err)
    })
  })
  
  
  return (

    <React.Fragment>
      <Title>Recent Items</Title>
       
      <Title>Recent Items</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Inventory Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Store name</TableCell>
            <TableCell align="right">
           Opened</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log("itemms table")}
          {items.map((row) => (
            <TableRow key={row.inventoryId}>
              <TableCell>{row.dateAdded}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.units}</TableCell>
              <TableCell>{row.storeName}</TableCell>
              <TableCell align="right">
              <div>
      <StyledCheckbox />
     
      
    </div>{row.opened}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more items
        </Link>
      </div>
      <Typography component="p" variant="h6">
        Bread
        
      </Typography>
      <Typography color="textSecondary" className={classes.seeMore}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View items
    
        </Link>
      </div>
     

    </React.Fragment>
  );
}


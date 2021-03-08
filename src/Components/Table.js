import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,inventorydate, name, quantity, units, storename,opened) {
  return { id, inventorydate, name, quantity, units, storename,opened };
}

const rows = [
  createData(0, '16 Mar, 2021', 'Rice', '1', '5 lb', 'Costco','opened'),
  createData(1, '16 Mar, 2021', 'Cornflakes', '2', '23 oz', 'Target','opened'),
  createData(2, '16 Mar, 2021', 'Lentils', '1', '2 lb', 'Suvidha','not yet'),
  createData(3, '16 Mar, 2021', 'Bread', '1', '20 oz', 'Target','opened'),
  createData(4, '15 Mar, 2021', 'Milk', '3', '3.78 L', 'Aldi','not yet'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Table() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Items</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Inventory Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Store name</TableCell>
            <TableCell align="right">Opened</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.inventorydate}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.units}</TableCell>
              <TableCell>{row.storename}</TableCell>
              <TableCell align="right">{row.opened}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more items
        </Link>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { useTheme } from '@material-ui/core/styles';
import {

  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Title from './Title';

function createItems(name,stock) {
  return{name, stock};
}


  const data = [
    createItems("Addeditem", '1'),
    createItems("Useditem", '2'),
    createItems("In stock",'3'),
    createItems("Out of stock",'2'),

  ];
  export default function Additems(){
    const theme=useTheme();
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        
          <Tooltip />
       
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="stock" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
        };


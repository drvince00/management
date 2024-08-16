// import './App.css';
import React, { useEffect, useState } from 'react';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { CircularProgress } from '@mui/material';

//import { withStyles } from '@mui/material';

function App() {
  const [customers, setCustomers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await fetch('/api/customers');
      console.log(response);
      console.log('응답 상태 코드:', response.status);
      const body = await response.json();
      // setLoading(false);
      return body;
    } catch (err) {
      console.log('FETCH 에러 ' + err);
      // setLoading(false);
    }
  };

  useEffect(() => {
    console.log('App component mounted!');
    const fetchData = async () => {
      const result = await callApi();
      console.log(result);
      setCustomers(result);
    };

    fetchData();
  }, []);

  return (
    // <Paper className={classes.root}>
    // <Table className={classes.table}>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            ? customers.map((c) => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    job={c.job}
                    gender={c.gender}
                  />
                );
              })
            : ''}
          {/* <CircularProgress />
          {customers
            ? customers.map((c) => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    job={c.job}
                    gender={c.gender}
                  />
                );
              })
            : ''} */}
        </TableBody>
      </Table>
    </Paper>
  );
}

// export default withStyles(styles)(App);
export default App;

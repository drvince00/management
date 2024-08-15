// import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/material';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/60/60',
    // image:
    //   'https://m.media-amazon.com/images/M/MV5BMTQ4NTE3MTYzOF5BMl5BanBnXkFtZTcwNDM4OTcyMg@@._V1_FMjpg_UX1000_.jpg',
    name: '이규영',
    birthday: '741024',
    gender: '남',
    job: '잡리스!!',
  },
  {
    id: 2,
    image: 'https://picsum.photos/61/61',
    // image:
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8VrSvHSgFQ25vhiGtnS7med8mKtbkefL1Q&s',
    name: '수산시장',
    birthday: '831024',
    gender: '여',
    job: '생선초밥',
  },
  {
    id: 3,
    image: 'https://picsum.photos/59/59',
    // image:
    //   'https://m.media-amazon.com/images/I/715R1ZcMxzL._AC_UF1000,1000_QL80_.jpg',
    name: '망원경',
    birthday: '941024',
    gender: '남',
    job: '멀리보다',
  },
];

// const customer = {
//   id: 1,
//   image: 'https://picsum.photos/200/200',
//   name: '이규영',
//   birthday: '741024',
//   gender: '남',
//   job: '!!잡리스!!',
// };

function App(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
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
          {customers.map((c) => {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);

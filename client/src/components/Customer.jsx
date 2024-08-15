import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

export default function Customer({ id, image, name, job, gender, birthday }) {
  console.log(image, id, name, job, gender, birthday);
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
      {/* <CustomerProfile id={id} name={name} image={image} />
      <CustomerInfo job={job} gender={gender} birthday={birthday} /> */}
    </>
  );
}

// function CustomerProfile({ image, name, id }) {
//   console.log(`Image : ${image}`);
//   return (
//     <div>
//       <img className="picture" src={image} alt="profile" />
//       <h2>
//         {name}({id})
//       </h2>
//     </div>
//   );
// }

// function CustomerInfo({ birthday, gender, job }) {
//   return (
//     <div>
//       <p>{birthday}</p>
//       <p>{gender}</p>
//       <p>{job}</p>
//     </div>
//   );
// }

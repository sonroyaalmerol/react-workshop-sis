import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SubjectsTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CODE</TableCell>
            <TableCell>SUBJ. NO</TableCell>
            <TableCell>DESCRIPTIVE TITLE</TableCell>
            <TableCell>SCHEDULE</TableCell>
            <TableCell>UNIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((subject) => (
            <TableRow key={subject.code}>
              <TableCell component="th" scope="row">
                {subject.code}
              </TableCell>
              <TableCell>{subject.name}</TableCell>
              <TableCell>{subject.description}</TableCell>
              <TableCell>{subject.schedule}</TableCell>
              <TableCell>{subject.units}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

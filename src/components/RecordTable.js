import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formatTimeInMs } from '../lib'

const styles = {
  table: {
    maxWidth: 280,
  },
}

const Latest = (records) => {
  return (
    <Table style={styles.table}>
      <TableHead>
        <TableRow style={{width: 30}}>
          <TableCell>Last 10 Games</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records.map((data, index) => {
          return (
            <TableRow key={'Record'+index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{formatTimeInMs(data)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

const Average = (records) => {
  let avg = 0;
  if (records.length > 0) {
    let sum = records.reduce(function(a, b) { return a + b; });
    avg = sum / records.length;
  }
  return (
    <Table style={styles.table}>
      <TableBody>
        <TableRow key='Average'>
          <TableCell>Average of latest games</TableCell>
          <TableCell>{formatTimeInMs(avg)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const Best = (records) => {
  let best = 0;
  if (records.length > 0)
    best = Math.min(...records);
  return (
    <Table style={styles.table}>
      <TableBody>
        <TableRow key='Best'>
          <TableCell>Best of latest games</TableCell>
          <TableCell>{formatTimeInMs(best)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default class RecordTable extends React.PureComponent {
  render() {
    const { records, tableType } = this.props;
    return (
      <div>
        {tableType === 'Latest' && Latest(records)}
        {tableType === 'Average' && Average(records)}
        {tableType === 'Best' && Best(records)}
      </div>
    )
  }
}
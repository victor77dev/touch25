import React from 'react';
import RecordTable from '../components/RecordTable';
import Grid from '@material-ui/core/Grid';

const styles = {
  record: {
    position: 'relative',
    display: 'inline-block',
    width: 'auto',
  },
}

const showRecords = 10;

export default class Record extends React.PureComponent {
  render() {
    const { records } = this.props;
    const latestRecords = records.slice(-showRecords).reverse();
    return (
        <Grid container style={styles.record}>
          <RecordTable records={latestRecords} tableType='Best'/>
          <RecordTable records={latestRecords} tableType='Average'/>
          <RecordTable records={latestRecords} tableType='Latest'/>
        </Grid>
    );
  }
}

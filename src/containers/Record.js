import React from 'react';
import RecordTable from '../components/RecordTable';
import Grid from '@material-ui/core/Grid';
import { connect } from  'react-redux';

const styles = {
  record: {
    position: 'relative',
    display: 'inline-block',
    width: 'auto',
  },
}

const mapStateToProps = (state) => {
  return {
    records: state.game.records,
  }
}

const mapDispatchToProps = dispatch => ({
});

const showRecords = 10;

export class Record extends React.PureComponent {
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

export default connect(mapStateToProps, mapDispatchToProps)(Record);
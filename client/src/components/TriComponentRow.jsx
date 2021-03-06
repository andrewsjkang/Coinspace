import React from 'react';
import {Statistic} from 'semantic-ui-react';

const TriComponentRow = (props) => {
  const price = +props.state.chartDataSet.slice(-1);
  const delta = price - (+props.state.chartDataSet[0]);
  const percentDelta = 100 * (delta / (+props.state.chartDataSet[0]));
  const renderNumber = (num) => {
    return Math.abs(num).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  };
  return (
    <Statistic.Group size="small" widths='five' className='ui five column row'>
      <div className='column'></div>
      <Statistic>
        <Statistic.Value>${renderNumber(price)}</Statistic.Value>
        <Statistic.Label>{props.coins[props.state.currentCoin - 1][0] + ' Price'}</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>{delta > 0 ? <b><font color='green'>{'+'}</font></b> : <b><font color='red'>{'-'}</font></b>}${renderNumber(delta)}</Statistic.Value>
        <Statistic.Label>{props.labels[props.state.currentTimePeriod][3] + ' (USD)'}</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>{percentDelta > 0 ? <b><font color='green'>{'+'}</font></b> : <b><font color='red'>{'-'}</font></b>}{renderNumber(percentDelta)} %</Statistic.Value>
        <Statistic.Label>{props.labels[props.state.currentTimePeriod][3] + ' (%)'}</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

export default TriComponentRow;

import classes from "./Chart.module.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const allDataPointsValue = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...allDataPointsValue);

  return (
    <div className={classes.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

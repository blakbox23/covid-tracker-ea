/*eslint-disable*/
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getGraphData } from '../redux/countries/countries';
import Nav from './Nav';

function Graph(props) {
const dispatch = useDispatch()
const graphStats = useSelector((state) => state.data.graphData);

useEffect(() => {
    dispatch(getGraphData(props.country));
  }, []);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 100,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 10,
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
      type: Line,
    labels: ['7', '6', '5', '4', '3', '2', '1'],
    datasets: [
      {
        label: '# of total cases',
        data: graphStats,
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#e9bf27',
        borderWidth: '1',
        // pointRadius: '3',
      },
    ],
  };

  return (
    <div className="graph-section">
         <Nav txt={'Details'}/>
      <header className="header flex">
        <div className="header-img" />
        <div className="header-text">
          <div><b>Graph</b></div>
          the line graph
        </div>
      </header>

      <p className="title">`TOTAL CASES IN KENYA IN THE LAST 7 DAYS` </p>
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;

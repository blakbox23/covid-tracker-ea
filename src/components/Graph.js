/*eslint-disable*/
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getGraphData } from '../redux/countries/countries';

// const graphStats = [1,3,4,5,7,8,4]

function Graph() {
const dispatch = useDispatch()
const graphStats = useSelector((state) => state.data.graphData);

useEffect(() => {
    dispatch(getGraphData());
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
          stepSize: 2,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
      type: Line,
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: '# of sumn',
        data: graphStats,
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#e9bf27',
        borderWidth: '1',
        pointRadius: '3',
      },
    ],
  };

  return (
    <div className="graph-section">
      <header className="header flex">
        <div className="header-img" />
        <div className="header-text">
          <div><b>Graph</b></div>
          the line graph
        </div>
      </header>

      <p className="title">GRAPH REPRESENTATION </p>
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;

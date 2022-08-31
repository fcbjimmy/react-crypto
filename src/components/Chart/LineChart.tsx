import { useContext, useEffect, useState } from 'react';
import { historicalData } from '../../helper/Api';
import { singleCoinType } from '../../helper/data.types';
import { AppContext } from '../../context/Context';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import { SyncLoader } from 'react-spinners';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import style from './LineChart.module.scss';
interface Props {
  data: singleCoinType | null;
}

const LineChart = ({ data }: Props) => {
  const [days, setDays] = useState(1);
  const { currency } = useContext(AppContext);
  const { dataChart, isLoading } = useAxiosFetch(historicalData(data?.id, currency));

  ChartJS.register(...registerables);

  return (
    <>
      {isLoading ? (
        <SyncLoader color={'#FFFFFF'} />
      ) : (
        <div className={style.container}>
          <Line
            data={{
              labels: dataChart?.prices.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 0
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleTimeString();
              }),
              datasets: [
                {
                  data: dataChart?.prices.map((coin) => coin[1]),
                  label: `Price Past ${days} days in ${currency}`,
                  borderColor: '#ffffff',
                },
              ],
            }}
            options={{ elements: { point: { radius: 1 } } }}
          />
        </div>
      )}
    </>
  );
};

export default LineChart;

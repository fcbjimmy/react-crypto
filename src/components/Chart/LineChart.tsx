import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/Context';
import { ClipLoader } from 'react-spinners';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import style from './LineChart.module.scss';
import Button from '../Button/Button';
import { buttonValues } from '../../helper/chart';

interface Props {
  id: string | undefined;
}

const LineChart = ({ id }: Props) => {
  const [days, setDays] = useState<number>(1);
  const { fetchHistoricData, isLoading, dataChart, currency } = useContext(AppContext);

  useEffect(() => {
    fetchHistoricData(id, days);
  }, [id, days, currency]);

  ChartJS.register(...registerables);

  const handleClick = (value: number) => setDays(value);

  return (
    <>
      {isLoading ? (
        <ClipLoader color={'#FFFFFF'} size='250px' />
      ) : (
        <div className={style.container}>
          <Line
            data={{
              labels: dataChart?.prices.map((coin) => {
                let date = new Date(coin[0]);
                let time = `${date.getHours()}:${date.getMinutes()}`;
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
          <div className={style.buttons}>
            {buttonValues.map((obj) => {
              return (
                <Button
                  key={obj.value}
                  selected={days === obj.value}
                  onClick={() => setDays(obj.value)}
                >
                  {obj.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default LineChart;

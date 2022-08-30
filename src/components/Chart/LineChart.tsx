import { useContext } from 'react';
import { historicalData } from '../../helper/Api';
import { singleCoinType } from '../../helper/data.types';
import { AppContext } from '../../context/Context';
import useAxiosFetch from '../../hooks/useAxiosFetch';

interface Props {
  data: singleCoinType | null;
}

const LineChart = ({ data }: Props) => {
  const { currency } = useContext(AppContext);

  const { dataChart } = useAxiosFetch(historicalData(data?.id, currency));
  console.log(dataChart);
  return <div>LineChart</div>;
};

export default LineChart;

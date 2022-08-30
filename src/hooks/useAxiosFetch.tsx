import { useEffect, useState } from 'react';
import axios from 'axios';
import { dataList, singleCoinType } from '../helper/data.types';

const useAxiosFetch = (dataurl: string) => {
  const [dataList, setDataList] = useState<dataList[] | null>(null);
  const [singleCoinData, setSingleCoinData] = useState<singleCoinType | null>(null);
  const [error, setError] = useState<string | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted: boolean = true;

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        if (isMounted) {
          setDataList(res.data);
          setSingleCoinData(res.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          console.log(err);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataurl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [dataurl]);

  return { dataList, singleCoinData, error, isLoading };
};

export default useAxiosFetch;
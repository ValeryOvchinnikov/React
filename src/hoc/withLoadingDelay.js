import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const withLoadingDelay = LoadingComponent => {
  const Card = props => {
    const [isLoading, setLoading] = useState(false);
    withLoadingDelay.displayName = 'loading';
    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    }, []);

    return isLoading ? <LoadingComponent {...props} /> : <Spinner />;
  };
  return Card;
};
export default withLoadingDelay;

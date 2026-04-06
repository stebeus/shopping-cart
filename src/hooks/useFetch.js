import { useEffect, useState } from 'react';

async function fetchData(url, ...[dataSetter, errorSetter, isLoadingSetter]) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }

    dataSetter(data);
  } catch (error) {
    errorSetter(error.message);
  } finally {
    isLoadingSetter(false);
  }
}

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url, setData, setError, setIsLoading);
  }, [url]);

  return [data, isLoading, error];
}

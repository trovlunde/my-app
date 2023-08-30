import React from 'react';
import { useEffect, useState } from 'react';

interface Starship {
    name: string;
    crew: string;
    passengers: string;
    cost_in_credits?: string;
    url: string;
  }

  interface ServiceInit {
    status: 'init';
  }
  interface ServiceLoading {
    status: 'loading';
  }
  interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
  }
  interface ServiceError {
    status: 'error';
    error: Error;
  }

  type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;

  interface Starships {
    results: Starship[];
  }
  
  const usePostStarshipService = () => {
    const [result, setResult] = useState<Service<Starships>>({
      status: 'loading'
    });
  
    useEffect(() => {
      fetch('https://swapi.co/api/starships')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);
  
    return result;
  };

const Starships: React.FC<{}> = () => {
  const service = usePostStarshipService();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map(starship => (
          <div key={starship.url}>{starship.name}</div>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default Starships;
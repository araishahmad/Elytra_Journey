import { useQuery } from '@tanstack/react-query';

function useFetch(fetchFn, key) {
    const {data, isLoading, error} = useQuery({
        queryKey: [key],
        queryFn: () => fetchFn()
    });

    return {data, isLoading, error};
}

export default useFetch;
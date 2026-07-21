import { useState } from 'react';
import useFetch from './useFetch';
import useDebounce from './useDebounce';

function App() {
  const [search, setSearch] = useState('');
  const [data, error] = useFetch('https://dummyjson.com/products');

  const debouncedValue = useDebounce(search, 500);

  const filtered = data.filter((p) =>
    p.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        {filtered.map(p => (
          <div key={p.id}>
            <h5><b>{p.title}</b></h5>

            <ul>
              <li><b>ID</b>: {p.id}</li>
              <li><b>Price</b>: ${p.price}</li>
              <li><b>Description</b>: {p.description}</li>
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
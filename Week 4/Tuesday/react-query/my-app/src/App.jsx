import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
}

const createPost = async (newPost) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return res.data;
}

function App() {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const debounceValue = useDebounce(search, 300);
    const queryClient = useQueryClient();

    const {
        data: posts,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['postsData'],
        queryFn: fetchData,
    });

    const mutation = useMutation({
        mutationFn: ['postsData'],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['postsData'] });
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ title, body: 'content', userId: 1 });
        setTitle('');
    }

    if (isLoading) return <p>loading....</p>;
    if (error) return <p>{error.message}</p>;

    const filtered = posts.filter((p) => p.title.includes(debounceValue));

    return (
        <section>
            <div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                {filtered.map((p) => (
                    <ul key={p.id}>
                        <li>{p.title}</li>
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default App;
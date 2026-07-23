import postService from '../service/postsService';
import { useState } from 'react';
import userService from '../service/usersService';
import useFetch from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';

const Dashboard = () => {
    const [view, setView] = useState('posts');
    const [search, setSearch] = useState('');

    const debounceValue = useDebounce(search, 500);

    const {data: posts, isLoading: postsLoading, error: postsError} = useFetch(() => (postService.getAll()), 'posts');
    const {data: users, isLoading: usersLoading, error: usersError} = useFetch(() => (userService.getAll()), 'users');
    
    const loading = postsLoading || usersLoading
    if (loading) return <div className='pop-up'>
        <p>Loading....</p>
    </div>

    const error = postsError || usersError;
    if (error) return <div className='pop-up'>
        <p>Failed to fetch data due to: {error.message}</p>
    </div>

    let postsFiltered, usersFiltered;
    if (view === 'posts')
        postsFiltered = posts.filter((p) => p.title.toLowerCase().includes(debounceValue));
    else if (view === 'users')
        usersFiltered = users.filter((u) => u.name.toLowerCase().includes(debounceValue));

    return (
        <>
            <div className='toggle-btns'>
                <button onClick={() => setView('posts')}>View Posts</button>
                <button onClick={() => setView('users')}>View Users</button>
            </div>

            <div className='search-bar'>
                <input type="text" value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <section className='cards-container'>
                {view === 'posts' && postsFiltered.map((p) =>
                    <div className="cards" key={p.id}>
                        <h3>{p.title}</h3>
                        <p><b>ID:</b>{p.userId}</p>
                        <p><b>Body:</b>{p.body}</p>
                    </div>
                )}

                {view === 'users' && usersFiltered.map((u) =>
                    <div className="cards" key={u.id}>
                        <h3>{u.name}</h3>
                        <p><b>Email:</b> {u.email}</p>
                        <p><b>Phone:</b> {u.phone}</p>
                    </div>
                )}
            </section>
        </>
    );
}

export default Dashboard;
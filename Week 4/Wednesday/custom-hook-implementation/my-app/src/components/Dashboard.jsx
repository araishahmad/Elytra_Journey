import postService from '../service/postsService';
import { useState } from 'react';
import userService from '../service/usersService';
import useFetch from '../hooks/useFetch';

const Dashboard = () => {
    const [view, setView] = useState('posts');

    const {data: posts, loading: postsLoading, error: postsError} = useFetch(postService.getAll);
    const {data: users, loading: usersLoading, error: usersError} = useFetch(userService.getAll);
    
    const loading = postsLoading || usersLoading
    if (loading) return <div className='pop-up'>
        <p>Loading....</p>
    </div>

    const error = postsError || usersError;
    if (postsError || usersError) return <div className='pop-up'>
        <p>Failed to fetch data due to: {error}</p>
    </div>

    return (
        <>
            <div className='toggle-btns'>
                <button onClick={() => setView('posts')}>View Posts</button>
                <button onClick={() => setView('users')}>View Users</button>
            </div>

            <section className='cards-container'>
                {view === 'posts' && posts.map((p) =>
                    <div className="cards" key={p.id}>
                        <h3>{p.title}</h3>
                        <p><b>ID:</b>{p.userId}</p>
                        <p><b>Body:</b>{p.body}</p>
                    </div>
                )}

                {view === 'users' && users.map((u) =>
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
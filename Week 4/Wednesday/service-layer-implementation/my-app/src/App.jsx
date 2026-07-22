import './App.css';
import { useState, useEffect } from 'react';
import getAllPosts from './service/postsService';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((data) => setPosts(data));
    }, []);

    return (
        <section className='cards-container'>
            {posts.map((p) =>
                <div className="cards" key={p.id}>
                    <h3>{p.title}</h3>
                    <p><b>ID:</b>{p.userId}</p>
                    <p><b>Body:</b>{p.body}</p>
                </div>
            )}

        </section>
    );

}

export default App;

import React, { useEffect, useState } from 'react';
import MemeCard from '../Components/Card';
import { getAllMemes } from "../api/memes";

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {
                    data.map((el) => 
                        <MemeCard 
                            key={el.id} 
                            img={el.url} 
                            title={el.name} 
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Homepage;

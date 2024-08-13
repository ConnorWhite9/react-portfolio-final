import React from 'react';
import Bio from '../components/Bio'
import Contact from '../components/Contact'
import '../styles/Home.css'

function Home() {
    return (
        <>
            <div className="home-container">
                <Bio />
                <Contact />
            </div>
            
        </>
    );
}

export default Home;
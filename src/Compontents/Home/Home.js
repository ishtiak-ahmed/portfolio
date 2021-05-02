import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Project from '../Projects/Project';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Project></Project>
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;
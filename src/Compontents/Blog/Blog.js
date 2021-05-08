import React from 'react';
import './Blog.css'
const Blog = () => {
    const blogs = [
        {
            title: '10 Build in JavaScript Function Junior Developer Should Know',
            link: 'https://ishtiak-ahmed.medium.com/10-javascript-build-in-function-junior-developer-should-know-814e5beba310',
            thumb: 'https://miro.medium.com/max/700/1*Wg2KVuuJVoL1M2O0GqgFGw.jpeg'
        },
        {
            title: 'Beginner way of Solving JavaScript Error, try, catch and debugging',
            link: 'https://ishtiak-ahmed.medium.com/beginner-way-of-solving-javascript-error-try-catch-and-debugging-668d6e104178',
            thumb: 'https://miro.medium.com/max/700/0*3OkH_OqrkG5bfof-'
        },
        {
            title: 'Core Fundamental of React And Performance Boosting',
            link: 'https://ishtiak-ahmed.medium.com/core-fundamental-of-react-and-performance-boosting-ca4524c46ce6',
            thumb: 'https://miro.medium.com/max/700/0*j6cHNBqxOUbTpouq'
        },
    ]

    return (
        <section className='py-5'>
            <h2 className=' text-center fw-bold'>My Blog</h2>
            <div className="container">
                <div className="row">
                    {
                        blogs.map(blog => {
                            return (
                                <div className='col-md-4 p-2'>
                                    <div className="blog-item">
                                        <div height='100px' className="img">
                                            <img className='card-img-top' src={blog.thumb} alt="" />
                                        </div>
                                        <h5><a href={blog.link} target='_blank' rel='no-referrer'>{blog.title}</a></h5>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>

        </section >
    );
};

export default Blog;
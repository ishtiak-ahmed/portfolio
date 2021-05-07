import React from 'react';

const Blog = () => {
    const blogs = [
        {
            title: '10 Build in JavaScript Function Junior Developer Should Know',
            link: 'https://ishtiak-ahmed.medium.com/10-javascript-build-in-function-junior-developer-should-know-814e5beba310',
            thumb: 'https://miro.medium.com/max/700/1*Wg2KVuuJVoL1M2O0GqgFGw.jpeg'
        },
        {
            title: '10 Build in JavaScript Function Junior Developer Should Know',
            link: 'https://ishtiak-ahmed.medium.com/10-javascript-build-in-function-junior-developer-should-know-814e5beba310',
            thumb: 'https://miro.medium.com/max/700/1*Wg2KVuuJVoL1M2O0GqgFGw.jpeg'
        },
        {
            title: '10 Build in JavaScript Function Junior Developer Should Know',
            link: 'https://ishtiak-ahmed.medium.com/10-javascript-build-in-function-junior-developer-should-know-814e5beba310',
            thumb: 'https://miro.medium.com/max/700/1*Wg2KVuuJVoL1M2O0GqgFGw.jpeg'
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
                                        <img className='card-img-top' src={blog.thumb} alt="" />
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
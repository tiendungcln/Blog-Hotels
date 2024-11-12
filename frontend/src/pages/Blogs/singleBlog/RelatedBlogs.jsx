import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchReladtedBlogsQuery } from '../../../redux/features/blogs/blogsApi';

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchReladtedBlogsQuery(id);

  return (
    <div>
      <h3 className='text-2xl font-medium pt-8 px-8 pb-5'>Related Blogs</h3>
      <hr />
      {
        blogs.length > 0
          ?
          (<div className='space-y-4 mt-5'>
            {
              blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog?._id}`}
                  className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4'>
                  <div className='size-14'>
                    <img src={blog.coverImg} alt='' className='h-full w-full rounded-full ring-2  ring-blue-700' />
                  </div>
                  <div >
                    <h4 className='font-medium text-[#1E73BE]'>{blog?.title.substring(0, 35)}</h4>
                    <p>{blog?.description.substring(0, 35)}...</p>
                  </div>
                </Link>
              ))
            }
          </div>)
          :
          (<div className='p-8'>No related blogs found!</div>)
      }
    </div>
  )
}

export default RelatedBlogs
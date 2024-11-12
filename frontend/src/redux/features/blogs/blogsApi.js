import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: 'include'
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    // show all bài viết 
    fetchBlogs: builder.query({
      query: ({ search = '', category = '', location = '' }) => `/blogs?search=${search}&category=${category}&location=${location}`,
      providesTags: ["Blogs"]
    }),
    // show 1 bài viết
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`
    }),
    // các bài viết liên quan
    fetchReladtedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`
    }),
    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: `/blogs/create-post`,
        method: "POST",
        body: newBlog,
        credentials: "include"
      }),
      invalidatesTags: ["Blogs"]
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update-post/${id}`,
        method: "PATCH",
        body: rest,
        credentials: "include"
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        credentials: "include"
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }]
    }),
  })
})

export const { useFetchBlogsQuery, useFetchBlogByIdQuery, useFetchReladtedBlogsQuery,
  usePostBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = blogApi;

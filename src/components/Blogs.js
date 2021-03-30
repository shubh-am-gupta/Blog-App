import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";
import Loader from "../components/Loader";
import "../styling/blogs.css";

const Blog = () => {
  const searchInput = useSelector(selectUserInput);
  const token = "";
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=9af952f3e5ced91412efc7db865aa568`;

  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then(response => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchInput]);

  return (
    <div className="blog_page">
      <h1 className="blog_pageHeader">Blogs</h1>
      {loading ? <Loader /> : ""}
      <div className="blogs">
        {blogs?.articles?.map(blog => (
          <a className="blog" target="_blank" href={blog.url}>
            <img src={blog.image} />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className="no_blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blog;

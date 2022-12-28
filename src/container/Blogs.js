import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Fade } from "react-awesome-reveal";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yushi95"
    )
      .then((r) => r.json())
      .then((blogs) => {
        setBlogs(blogs.items);
      });
  }, []);

  const blogItems = blogs.map((blog, index) => {
    return (
      <BlogCard
        key={index}
        tags={blog.categories}
        title={blog.title}
        image={blog.thumbnail}
        link={blog.link}
        pubDate={blog.pubDate.split(" ")[0]}
      />
    );
  });

  return (
    <div
      id="blogs"
      className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto lg:px-6 md:px-6">
        <Fade direction="up" cascade triggerOnce="true">
          <header className="flex flex-col items-center text-center">
            <h2 className="font-bold text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
              Blogs
            </h2>
          </header>
        </Fade>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10 lg:gap-14 w-full">
          {blogItems}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

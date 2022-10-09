import React from "react";
import BlogTag from "./BlogTag";
import { MdArrowForward } from "react-icons/md";

const BlogCard = ({ title, image, link, tags, pubDate }) => {
  const blogTags = tags.map((tag, index) => {
    return <BlogTag key={index} tag={tag} />;
  });

  return (
    <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer transition-all duration-300 hover:-translate-y-2">
      <div className="h-full rounded-lg overflow-hidden shadow-lg shadow-indigo-200/20">
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            <img
              className="lg:h-72 md:h-56 h-64 w-full object-cover object-center"
              src={image}
              alt="blog"
            />
          </a>
        </div>
        <div className="p-6 hover:text-white transition duration-300 ease-in">
          <h2 className="text-base font-medium text-indigo-300 mb-1">
            {pubDate}
          </h2>
          <h1 className="text-1xl font-semibold mb-3">{title}</h1>
          <hr></hr>
          <div className="flex flex-wrap mb-3 mt-2">{blogTags}</div>
          <div>
            <a
              href={link}
              className="text-indigo-300 inline-flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              Read More
              <button className="animate-bounce w-4 h-4 ml-2">
                <MdArrowForward />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import Link from "next/link";
import React from "react";
import BlogCard from "../_components/BlogCard";
import blogImage1 from "../images/blogImage1.jpg";
import blogImage2 from "../images/blogImage2.jpeg";
import blogImage3 from "../images/blogImage3.jpg";
import blogImage4 from "../images/blogImage4.jpg";
const BlogPage = () => {
  return (
    <div>
      <div className="ml-36 mr-36 pt-36 flex gap-5 justify-between">
        <h1 className="text-5xl font-[1000]">BLOG</h1>
        <p className="text-xl w-[50%] mobile:text-xs font-[1000]">
          Stay updated with the latest insights and developments in the crypto
          world. Whether you're a seasoned trader or just starting out, our blog
          offers valuable information on topics ranging from market trends to
          the most secure crypto strategies. Discover tips, tools, and
          techniques to help you make informed decisions in the ever-evolving
          world of cryptocurrencies.
        </p>
      </div>
      <div className="mobile:grid mobile:grid-cols-2 mobile:pt-20 mobile:pl-5 mobile:pr-5 gap-10 verybig:m-0 ml-36 mr-36 pt-36 flex justify-between">
        <BlogCard imageSrc={blogImage1}>
          What is the best and most secure Crypto ?
        </BlogCard>
        <BlogCard imageSrc={blogImage2}>
          Crypto 101: All you need to know about the Crypto
        </BlogCard>
        <BlogCard imageSrc={blogImage3}>
          5 Crypto Apps you Should not be missing out
        </BlogCard>
        <BlogCard imageSrc={blogImage4}>
          Best 4K Monitors for Efficient Crypto Trading
        </BlogCard>
      </div>
    </div>
  );
};

export default BlogPage;

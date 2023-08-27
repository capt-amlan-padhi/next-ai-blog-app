import { Post } from "@prisma/client";
import React from "react";
import Cards from "./Cards";

type Props = {
  otherPosts: Array<Post>;
};

const Other = ({ otherPosts }: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* HEADER */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Cards
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Cards
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Cards
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Cards
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
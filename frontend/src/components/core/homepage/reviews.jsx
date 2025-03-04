import React from 'react';
import { motion } from 'framer-motion';
import ReviewCard from "../../common/cards/reviewcard";
import { reviews } from "../../../data/dummydata";

export default function Reviews() {
  // Duplicate reviews so that scrolling is seamless
  const repeatedReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div id="reviews" className="outfit-400 my-[4vw] md:my-[8vw] w-[80%] mx-auto overflow-hidden">
      <motion.div
        className="flex gap-[2vw] p-[2vw]"
        // Animate X translation from 0% to -50% of the container width.
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {repeatedReviews.map((review, i) => (
          <div
            key={i}
            className="min-w-[20vw] transform transition-transform duration-300"
          >
            <ReviewCard data={review} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

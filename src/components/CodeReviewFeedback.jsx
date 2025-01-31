import React, { useState } from "react";

function CodeReviewFeedback() {
  const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });
  const [Performancevotes, setPerformanceVotes] = useState({
    upvotes: 0,
    downvotes: 0,
  });
  const handleUpvote = () => {
    setVotes((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
  };
  const handleDownvote = () => {
    setVotes((prev) => ({ ...prev, downvotes: prev.downvotes + 1 }));
  };
  const handlePerformanceUpvote = () => {
    setPerformanceVotes((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
  };
  const handlePerformanceDownvote = () => {
    setPerformanceVotes((prev) => ({ ...prev, downvotes: prev.downvotes + 1 }));
  };
  return (
    <div className="flex items-center justify-center gap-28  h-screen flex-wrap">
      {/* Readability */}
      <div className="shadow-lg w-fit text-center p-6">
        <h1 className="text-4xl font-semibold text-gray-600 my-4">
          Readability
        </h1>
        <div className="flex gap-6 my-8">
          <button
            className="bg-green-500 px-4 py-1 rounded text-xl text-white flex flex-col items-center justify-center active:scale-95 transition-all duration-400 "
            onClick={handleUpvote}
          >
            👍<span>Upvote</span>
          </button>
          <button
            className="bg-red-500 px-4 py-1 rounded text-xl text-white flex flex-col items-center justify-center active:scale-95 transition-all duration-400 "
            onClick={handleDownvote}
          >
            👎<span>Downvote</span>
          </button>
        </div>
        <h1 className="text-xl text-green-500 font-semibold my-2">
          Upvotes : {votes.upvotes}
        </h1>
        <h1 className="text-xl text-red-500 font-semibold my-2">
          Downvotes : {votes.downvotes}
        </h1>
      </div>
      {/* Performance */}
      <div className="shadow-lg w-fit text-center p-6">
        <h1 className="text-4xl font-semibold text-gray-600 my-4">
          Performance
        </h1>
        <div className="flex gap-6 my-8">
          <button
            className="bg-green-500 px-4 py-1 rounded text-xl text-white flex flex-col items-center justify-center active:scale-95 transition-all duration-400 "
            onClick={handlePerformanceUpvote}
          >
            👍<span>Upvote</span>
          </button>
          <button
            className="bg-red-500 px-4 py-1 rounded text-xl text-white flex flex-col items-center justify-center active:scale-95 transition-all duration-400 "
            onClick={handlePerformanceDownvote}
          >
            👎<span>Downvote</span>
          </button>
        </div>
        <h1 className="text-xl text-green-500 font-semibold my-2">
          Upvotes : {Performancevotes.upvotes}
        </h1>
        <h1 className="text-xl text-red-500 font-semibold my-2">
          Downvotes : {Performancevotes.downvotes}
        </h1>
      </div>
  
    </div>
  );
}

export default CodeReviewFeedback;

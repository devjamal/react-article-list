import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(
      `http://localhost:8000/api/articles/${articleName}/upvote`,
      {
        method: "post",
      }
    );
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>

      <p>
        &nbsp; This post got upvoted {upvotes}
        <i className="fa fa-heart " onClick={() => upvoteArticle()}></i>
        times
      </p>
    </div>
  );
};

export default UpvotesSection;

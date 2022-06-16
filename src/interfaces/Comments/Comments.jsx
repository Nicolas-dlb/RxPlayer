import React from "react";
import Comment from "../../components/comment/Comment";
import "./Comments.css";

function Comments({ reactions, setReactions, currentTimecode, isDesktop }) {
  const addComment = (reaction) => (
    <Comment key={reaction.id} reaction={reaction} />
  );
  return (
    <div className="comments">
      <button
        type="button"
        className="btn"
        onClick={() =>
          setReactions([
            ...reactions,
            {
              id: `${Math.random() * 10}${currentTimecode}`,
              name: "John Doe",
              message: `Test`,
              timecode: currentTimecode,
            },
          ])
        }
      >
        Add
      </button>
      <div className="comments-wrapper">
        {reactions
          .filter((reaction) => reaction.timecode <= currentTimecode)
          .sort((a, b) =>
            isDesktop ? a.timecode - b.timecode : a.timecode - b.timecode
          )
          .map(addComment)}
      </div>
    </div>
  );
}

export default Comments;

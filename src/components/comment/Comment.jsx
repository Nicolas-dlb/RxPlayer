import React, { useEffect, useState } from "react";
import { Feed, Icon } from "semantic-ui-react";
import "./Comment.css";
import image from "../../assets/person.svg";

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

function Comment({ reaction }) {
  const [isMounted] = useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };

  return (
    <div key={reaction.message}>
      {shouldRenderChild && (
        <div style={isMounted ? mountedStyle : unmountedStyle}>
          <Feed>
            <Feed.Event>
              <Feed.Label image={image} />
              <Feed.Content>
                <Feed.Summary>
                  <a>{reaction.name}</a> posted on this video
                  <Feed.Date>
                    {new Date(reaction.timecode * 1000)
                      .toISOString()
                      .substring(14, 19)}
                  </Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{reaction.message}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />5 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </div>
      )}
    </div>
  );
}

export default Comment;

import React, { useEffect, useRef } from 'react';

function RedditEmbed({ postUrl, usernameUrl, username, subredditUrl, subreddit }) {
  const embedContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.reddit.com/widgets.js';
    script.async = true;
    script.charset = 'UTF-8';

    embedContainer.current.appendChild(script);
  }, []);

  return (
    <div ref={embedContainer}>
      <blockquote className="reddit-embed-bq" style={{ height: '500px' }} data-embed-showusername="false" data-embed-height="740">
        <a href={postUrl}>Link to Reddit Post</a><br />
        by <a href={usernameUrl}>{username}</a> in <a href={subredditUrl}>{subreddit}</a>
      </blockquote>
    </div>
  );
}

export default RedditEmbed;

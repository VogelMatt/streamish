import React from "react";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
  return (
    <Card >
      <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
      <CardBody>
        {/* <link to= {`users/${video.userProfileId}`}/> */}

        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
          <strong>{video.title}</strong>
        </p>
        <p>{video.description}</p>
        <ul>
          {video.comments ? (
            video.comments.map((c) => <li key={c.id}>{c.message}</li>))
            : null}
          {/*           
          {video.comments.map((comment, index) => (
            <li key={index}>{comment.message}</li>
          ))} */}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Video;
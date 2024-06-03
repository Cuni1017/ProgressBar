import React from "react"; //node_modules會自己對應

function UserVideos({ likes }) {
  return (
    <div>
      {likes.map((videoUrl) => {
        return (
          <iframe
            // https://www.youtube.com/watch?v=Ut45bpfqFjY
            // 要改成 https://www.youtube.com/embed/Ut45bpfqFjY
            // 否則會被google拒絕連線
            src={videoUrl}
            key={videoUrl}
            allowFullScreen
            // name="Content Security Policy"
          >
            {/* {videoUrl} */}
          </iframe>
        );
        // return <p key={videoUrl}>{videoUrl}</p>;
      })}
    </div>
  );
}

export default UserVideos;

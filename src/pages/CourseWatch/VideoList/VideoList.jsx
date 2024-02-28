import { List } from "antd";
import { useEffect, useState } from "react";
export const VideoList = ({ videos, selectedVideo, setSelectedVideo }) => {
  const [videoURL, setVideoURL] = useState("");
  return (
    <List
      itemLayout="horizontal"
      dataSource={videos}
      className="overflow-y-auto"
      renderItem={(video, index) => (
        <List.Item
          className={`hover:bg-slate-200 transition duration-200 rounded-lg cursor-pointer ${
            videoURL === video.video ? "bg-slate-200" : ""
          }`}
        >
          <List.Item.Meta
            avatar={
              <img src={video?.thumbnail} className="w-[100px] aspect-video" />
            }
            title={
              <div
                className="text-stg-color"
                onClick={() => {
                  setSelectedVideo(video);
                  setVideoURL(video.video);
                }}
              >
                {video?.title}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

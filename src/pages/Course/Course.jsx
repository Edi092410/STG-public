import { useState, useEffect } from "react";
import { GetData } from "../../backend/axios/AxiosAdmin";
import { CourseElement } from "./CourseElement/CourseElement";
import { stripHtmlTags } from "../../utils/functions/stripHtmlTags";

export const Course = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideo = async () => {
      try {
        // const response = await GetDataWithAuth(`getParentAndChilds/${id}`);
        const response = await GetData(`getParentLessons`);
        // console.log("response", response);
        setVideos(response.data.data);
        console.log("video", response.data.data);
      } catch (error) {
        console.log("video error", error);
        // Handle the error
      }
    };

    getVideo();
  }, []);

  console.log("total videos", videos.length);

  return (
    <div className="grid grid-cols-3 gap-5 px-[5%] my-[5vh]">
      {videos.map((video) => (
        <div className="flex justify-center">
          <CourseElement
            image={video?.thumbnail}
            author={video?.author}
            title={video?.title}
            intro={stripHtmlTags(video?.intro)}
            content={video?.content}
            id={video?.id}
            date={video?.created_at}
            lessons={video.length} // bodoh
          />
        </div>
      ))}
    </div>
  );
};

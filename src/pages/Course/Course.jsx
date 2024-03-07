import { useState, useEffect } from "react";
import { GetData } from "../../backend/axios/AxiosAdmin";
import { CourseElement } from "./CourseElement/CourseElement";
import { stripHtmlTags } from "../../utils/functions/stripHtmlTags";
import { Pagination } from "antd";
import { paginationConfig } from "../../components/common/PaginationConfig/paginationConfig";

export const Course = () => {
  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    const getVideo = async () => {
      try {
        // const response = await GetDataWithAuth(`getParentAndChilds/${id}`);
        const response = await GetData(`getParentLessons`);
        // console.log("response", response);
        setVideos(response?.data?.data);
        console.log("video", response?.data?.data);
      } catch (error) {
        console.log("video error", error);
        // Handle the error
      }
    };

    getVideo();
  }, []);

  console.log("total videos", videos.length);

  return (
    <div className="w-full h-full px-[5%] my-[5vh]">
      <div className="grid grid-cols-3 gap-5">
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
              lessons={parseInt(video.childs) + 1} // bodoh
            />
          </div>
        ))}
      </div>

      <div className="w-full mt-5 ">
        <Pagination
          {...paginationConfig(
            videos ? videos.length : 0,
            pagination,
            setPagination
          )}
        />
      </div>
    </div>
  );
};

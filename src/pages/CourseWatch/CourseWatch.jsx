import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "../../backend/axios/AxiosAdmin";
import { VideoList } from "./VideoList/VideoList";
import { Collapse } from "antd";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { stripHtmlTags } from "../../utils/functions/stripHtmlTags";

export const CourseWatch = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  // id-g ashiglan back-end ees post-g avah
  const { id } = useParams();
  useEffect(() => {
    console.log("get children lessons from course watch useeffect");
    const getVideo = async () => {
      try {
        const response = await GetData(`getParentAndChilds/${id}`);
        setVideos(response.data.data);
        setSelectedVideo(response.data.data[0]);
        console.log("response", response);
      } catch (error) {
        console.log("video error", error);
        // Handle the error
      }
    };

    getVideo(); // Invoke the getVideo function
  }, []); // Pass an empty dependency array to run the effect only once on mount
  return (
    <div className=" p-4 ">
      <div className="w-full border border-slate-300 rounded-lg p-5">
        <div className=" flex ">
          <div className={`${videos.length > 1 ? "w-[75%]" : "w-full"}  mr-5`}>
            <video
              controls
              src={selectedVideo?.video}
              poster={selectedVideo?.thumbnail}
              className=" rounded-lg aspect-video bg-black"
              controlsList="nodownload"
            >
              Таны ашиглаж байгаа хөтөч энэ бичлэгийг дэмжихгүй байна. Өөр хөтөч
              ашиглана уу!.
            </video>
            <div className=" w-full flex justify-between items-center my-4">
              <div className=" ml-2 text-base font-semibold">
                {selectedVideo?.title}
              </div>
              <div className="flex items-center">
                <div className="bg-stg-color rounded-full mr-1">
                  <ProfileIcon color={"#ffffff"} size={20} />
                </div>
                <div>{selectedVideo?.author}</div>
              </div>
            </div>
          </div>
          <div
            className={`${
              videos.length > 1 ? "w-[25%]" : "hidden"
            } relative border border-l-slate-300 border-y-0 border-r-0`}
          >
            <div className="absolute left-5 w-full h-full overflow-y-auto">
              <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
            </div>
          </div>
        </div>
        <Collapse
          items={[
            {
              key: "1",
              label: "Дэлгэрэнгүй",
              children: (
                <div>
                  {videos[0]?.intro && (
                    <>
                      <div className=" font-semibold">Хураангуй</div>
                      <div>{stripHtmlTags(videos[0]?.intro)}</div>
                    </>
                  )}
                  {videos[0]?.description && (
                    <>
                      <div className=" font-semibold">Дэлгэрэнгүй</div>
                      <div>{stripHtmlTags(videos[0]?.description)}</div>
                    </>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

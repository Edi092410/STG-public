import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "../../backend/axios/AxiosAdmin";
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
    <div className=" p-4">
      <div className=" flex w-full border border-slate-300 rounded-lg p-5">
        <div className="w-full">
          <video
            controls
            src={selectedVideo?.video}
            poster={selectedVideo?.thumbnail}
            className=" rounded-2xl lg:w-[70%] w-full aspect-video bg-black mr-5"
            controlsList="nodownload"
          >
            Таны ашиглаж байгаа хөтөч энэ бичлэгийг дэмжихгүй байна. Өөр хөтөч
            ашиглана уу!.
          </video>
          <div className="mt-2 ml-2 text-base font-semibold">
            {selectedVideo?.title}
          </div>
        </div>

        <div className="flex flex-col border border-l-slate-300 gap-y-4">
          {videos.map((video) => (
            <div className="flex items-center ml-5">
              <img src={video?.thumbnail} className=" aspect-video" />
              <div
                className=" text-stg-color cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {video?.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

import { DashboardCard } from "../../components/forSite/DashboardCard/DashboardCard";
import { Select } from "antd";

export const Summary = () => {
  return (
    <div className="grid grid-cols-2 px-[5%] my-[5vh]">
      <DashboardCard className={`w-[400px]`}>
        <div className="p-4">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold text-stg-color">Төлбөр</div>
            <Select className="w-[150px]">
              <Select.Option>Өнөөдөр</Select.Option>
              <Select.Option>Энэ долоо хоног</Select.Option>
              <Select.Option>Энэ сар</Select.Option>
              <Select.Option>Энэ жил</Select.Option>
            </Select>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col items-center border-r pr-4 justify-center">
              <div className="text-xs text-slate-400 mb-1">Эхний үлдэгдэл</div>
              <div className="text-stg-color text-lg">100'000₮</div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center pl-4 justify-center text-center">
              <div className="text-xs text-slate-400 mb-1">Эцсийн үлдэгдэл</div>
              <div className="text-stg-color text-lg">400'000₮</div>
            </div>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard className={`w-[400px]`}>
        <div className="px-4">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold text-stg-color">Захиалга</div>
            <Select className="w-[150px]">
              <Select.Option>Өнөөдөр</Select.Option>
              <Select.Option>Энэ долоо хоног</Select.Option>
              <Select.Option>Энэ сар</Select.Option>
              <Select.Option>Энэ жил</Select.Option>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=" text-slate-400">
            Хүлээгдэж байгаа:{" "}
            <span className=" font-semibold text-stg-color">40</span>
          </div>
          <div className=" text-slate-400">
            Хийгдэж байгаа:{" "}
            <span className=" font-semibold text-stg-color">40</span>
          </div>
          <div className=" text-slate-400">
            Хийгдсэн: <span className=" font-semibold text-stg-color">40</span>
          </div>
          <div className=" text-slate-400">
            Хийгдээгүй:{" "}
            <span className=" font-semibold text-stg-color">40</span>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

{
  /* <div className="flex flex-col gap-2">
  <div className="flex items-center text-slate-400">
    <span className="mr-2">Хүлээгдэж байгаа:</span>{" "}
    <span className="text-stg-color">4</span>
  </div>
  <div className="flex items-center text-slate-400">
    <span className="mr-2">Хийгдэж байгаа:</span>{" "}
    <span className="text-stg-color">4</span>
  </div>
  <div className="flex items-center text-slate-400">
    <span className="mr-2">Хийгдсэн:</span>{" "}
    <span className="text-stg-color">4</span>
  </div>
  <div className="flex items-center text-slate-400">
    <span className="mr-2">Хийгдээгүй:</span>{" "}
    <span className="text-stg-color">4</span>
  </div>
</div>; */
}

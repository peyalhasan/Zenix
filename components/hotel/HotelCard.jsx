import HotelSummaryInfo from "./HotelSummaryInfo";

import Image from "next/image";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
      width={200}
      height={200}
        src="/hero-bg"
        className="max-h-[162px] max-w-[240px]"
        alt=""
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;

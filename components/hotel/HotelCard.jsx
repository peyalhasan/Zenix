import HotelSummaryInfo from "./HotelSummaryInfo";

import Image from "next/image";

const HotelCard = ({info, checkin, checkout}) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
      width={200}
      height={200}
        src={info?.thumbNailUrl || "/hero-bg.jpg"}
        className="max-h-[162px] max-w-[240px]"
        alt={info?.name}
      />
      <HotelSummaryInfo fromListPage={true} info={info} checkin={checkin}  checkout={checkout} />
    </div>
  );
};

export default HotelCard;

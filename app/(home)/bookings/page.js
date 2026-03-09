import { auth } from "@/auth/auth";
import Search from "@/components/search/Search";
import PastBooking from "@/components/users/bookings/PastBooking";
import UpcomingBooking from "@/components/users/bookings/UpcomingBooking";
import ProfileInfo from "@/components/users/ProfileInfo";
import { redirect } from "next/navigation";


const Bookings=async()=> {
  const session = await auth()

  if(!session){
    redirect('/login')
  }
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}
export default Bookings;

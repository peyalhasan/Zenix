import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { connectMongo } from "@/service/mongo";
import {
  isDateInBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export async function getAllHotels(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");

  try {
    await connectMongo();
    const hotelsByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ])
      .lean();
    let allHotels = hotelsByDestination;

    if (checkin && checkout) {
      allHotels = await Promise.all(
        allHotels.map(async (hotel) => {
          const found = await findBooking(hotel._id, checkin, checkout);

          if (found) {
            hotel["isBooked"] = true;
          } else {
            hotel["isBooked"] = false;
          }
          return hotel;
        }),
      );
    }

    return replaceMongoIdInArray(allHotels);
  } catch (err) {
    console.log(err.message);
  }
}

async function findBooking(hotelId, checkin, checkout) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    return (
      isDateInBetween(checkin, match.checkin, match.checkout) ||
      isDateInBetween(checkout, match.checkin, match.checkout)
    );
  });

  return found;
}

export async function getRattingForHotel(hotelId) {
  const rattings = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(rattings);
}

export async function getReviewsById(id) {
  const reviews = await reviewModel.find({ id });
  return replaceMongoIdInArray(reviews);
}

export async function getHotelById(hotelId) {
  const hotel = await hotelModel.findById(hotelId).lean();
  return replaceMongoIdInObject(hotel);
}

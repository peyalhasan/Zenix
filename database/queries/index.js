import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { connectMongo } from "@/service/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

export async function getAllHotels() {
  try {
    await connectMongo();
    const hotels = await hotelModel
      .find()
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ])
      .lean();

    return replaceMongoIdInArray(hotels);
  } catch (err) {
    console.log(err.message);
  }
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

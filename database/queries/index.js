import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { connectMongo } from "@/service/mongo";
import { replaceMongoIdInArray } from "@/utils/data-utils";

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
  
}

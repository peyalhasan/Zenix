import { hotelModel } from "@/models/hotel-model";
import { connectMongo } from "@/service/mongo";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export async function getAllHotels() {
  try {
    const hotels = await hotelModel.find().lean();
 
    return replaceMongoIdInArray(hotels);
  } catch (err) {
    console.log(err.message);
  }
}

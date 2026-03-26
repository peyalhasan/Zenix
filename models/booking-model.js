import mongoose, {Schema} from "mongoose";

const bookingSchema = new Schema({
  hotelId: {
    required: true,
    type: Schema.Types.ObjectId
  },
  userId: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  checkin: {
    required: true,
    type: String
  },
  checkout: {
    required: true,
    type: String
  },
});


export const bookingModel = mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);

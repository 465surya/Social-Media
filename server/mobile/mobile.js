import mongoose,{Schema} from "mongoose";
const schema = new Schema({
  id:String,
  url: String,
  image: String,
  price: String,
  title: String,
  mileage: String,
  carSpecs: String,
  location: String,
  condition: String,
});
export const Mobile=mongoose.model('mobile',schema)
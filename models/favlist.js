import mongoose from "mongoose";

const FavlistSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: false,
    },
    episode: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Favlist || mongoose.model("Favlist", FavlistSchema);
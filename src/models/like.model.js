import mongoose, { Schema } from "mongoose";


const likeSchema = new Schema(
  {
    video: {
      types: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      types: Schema.Types.ObjectId,
      ref: "Comment",
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
    likeBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true },
);


export const Like = mongoose.model("Like", likeSchema);

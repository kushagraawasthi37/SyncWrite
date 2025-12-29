import mongoose from "mongoose";

const activeSessionSchema = new mongoose.Schema(
  {
    document_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
      index: true,
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    socket_id: {
      type: String,
      required: true,
    },

    cursor_position: {
      type: Number,
      default: 0,
    },

    last_active_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

export const ActiveSession = mongoose.model(
  "ActiveSession",
  activeSessionSchema
);

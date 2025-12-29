import mongoose from "mongoose";

const operationSchema = new mongoose.Schema(
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

    operation_type: {
      type: String,
      enum: ["insert", "delete"],
      required: true,
    },

    position: {
      type: Number,
      required: true,
      min: 0,
    },

    value: {
      type: String,
      required: true,
    },

    version: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    minimize: false,
  }
);

export const Operation = mongoose.model("Operation", operationSchema);

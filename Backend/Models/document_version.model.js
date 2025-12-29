import mongoose from "mongoose";

const documentVersionSchema = new mongoose.Schema(
  {
    document_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
      index: true,
    },

    content_snapshot: {
      type: String,
      required: true,
    },

    version_number: {
      type: Number,
      required: true,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

export const DocumentVersion = mongoose.model(
  "DocumentVersion",
  documentVersionSchema
);

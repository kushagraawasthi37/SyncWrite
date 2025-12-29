import mongoose from "mongoose";

const documentCollaboratorSchema = new mongoose.Schema(
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
      index: true,
    },

    role: {
      type: String,
      enum: ["OWNER", "EDITOR", "VIEWER"],
      required: true,
    },

    joined_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

// Prevent duplicate collaborators
documentCollaboratorSchema.index(
  { document_id: 1, user_id: 1 },
  { unique: true }
);

export const DocumentCollaborator = mongoose.model(
  "DocumentCollaborator",
  documentCollaboratorSchema
);

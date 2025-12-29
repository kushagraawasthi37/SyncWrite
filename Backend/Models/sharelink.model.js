import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema(
  {
    document_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
    },

    invited_email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["EDITOR", "VIEWER"],
      required: true,
    },

    token: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    expires_at: {
      type: Date,
      required: true,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

export const Invite = mongoose.model("Invite", inviteSchema);

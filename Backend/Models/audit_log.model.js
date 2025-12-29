import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    document_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
    },

    action: {
      type: String,
      required: true,
    },

    metadata: {
      type: Object,
      default: {},
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

export const AuditLog = mongoose.model("AuditLog", auditLogSchema);

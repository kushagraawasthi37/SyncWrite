import { DocumentCollaborator } from "../models/documentCollaborator.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getUserRole = async (documentId, userId) => {
  const collaborator = await DocumentCollaborator.findOne({
    document_id: documentId,
    user_id: userId,
  });

  return collaborator?.role || null;
};

//View permission
export const canViewDocument = asyncHandler(async (req, res, next) => {
  const { documentId } = req.params;
  const userId = req.user._id;

  const role = await getUserRole(documentId, userId);

  if (!role) {
    throw new ApiError(403, "You do not have access to this document");
  }

  next();
});

// Edit Permission
export const canEditDocument = asyncHandler(async (req, res, next) => {
  const { documentId } = req.params;
  const userId = req.user._id;

  const role = await getUserRole(documentId, userId);

  if (!role || role === "VIEWER") {
    throw new ApiError(403, "You do not have permission to edit this document");
  }

  next();
});

// (Owner only)
export const canManageDocument = asyncHandler(async (req, res, next) => {
  const { documentId } = req.params;
  const userId = req.user._id;

  const role = await getUserRole(documentId, userId);

  if (role !== "OWNER") {
    throw new ApiError(403, "Only document owner can perform this action");
  }

  next();
});

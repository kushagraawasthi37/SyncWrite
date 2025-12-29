import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  canViewDocument,
  canEditDocument,
  canManageDocument,
} from "../middlewares/permission.middleware.js";

const router = Router();

router.get("/:documentId", verifyJWT, canViewDocument, getDocument);
router.patch("/:documentId", verifyJWT, canEditDocument, updateDocument);
router.delete("/:documentId", verifyJWT, canManageDocument, deleteDocument);

export default router;

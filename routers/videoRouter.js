import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo, OnlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, OnlyPrivate, getUpload);
videoRouter.post(routes.upload, OnlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), OnlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), OnlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), OnlyPrivate, deleteVideo);

export default videoRouter;

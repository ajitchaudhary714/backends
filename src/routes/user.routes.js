import { Router } from "express";
import { registerUser, loginUser, logoutUser,refreshAccessToken,getCurrentUser, updateAccountDetails,
  updateUserAvatar,
  changeCurrentpassword,
  updateUserCoverImage,
  getWatchHistory,
  getUserChannelProfile, } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser,
);

router.route("/login").post(loginUser);

//secure routes
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentpassword);
router.route("/current-user").get(verifyJWT, getCurrentUser)

router.route("/update-account").patch(verifyJWT, updateAccountDetails)

router.route("/avatar").patch(
  verifyJWT,
  upload.single("avatar"),
  updateUserAvatar
)


router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)


router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/watch-history").get(verifyJWT, getWatchHistory);


 
export default router;

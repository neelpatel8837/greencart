import User from "../models/User.js";

// update user cart data: /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems) {
      return res.status(400).json({
        success: false,
        message: "cartItems are required",
      });
    }

    // USER ID COMES FROM AUTH MIDDLEWARE
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cartItems },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "Cart updated successfully",
      cartItems: updatedUser.cartItems,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

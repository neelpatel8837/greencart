import Address from "../models/Address.js";

// add address: /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body; // ✅ REQUIRED
    const userId = req.user._id;  // ✅ from auth middleware

    const newAddress = await Address.create({
      ...address,
      userId,
    });

    res.json({
      success: true,
      message: "Address added successfully",
      address: newAddress,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getAddress = async (req, res) => {
  try {
    const userId = req.user._id;

    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

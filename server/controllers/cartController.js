import User from "../models/User.js"

// update user cartdata: /api/cart/update

  //original
export const updateCart = async(req, res)=>{
    try {
        const { userId, cartItems } = req.body
        await User.findByIdAndUpdate(userId,{cartItems})
        res.json({ success: true, message: "Cart Updated"})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
 }
// import User from "../models/User.js";

// // update user cartdata: /api/cart/update
// export const updateCart = async (req, res) => {
//     try {
//         const { userId, cartItems } = req.body;
        
//         // Check if userId and cartItems are provided
//         if (!userId || !cartItems) {
//             return res.status(400).json({ success: false, message: "userId and cartItems are required" });
//         }

//         // Update the cartItems
//         const updatedUser = await User.findByIdAndUpdate(userId, { cartItems }, { new: true });
        
//         // If user not found, return an error
//         if (!updatedUser) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, message: "Cart Updated", updatedUser });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

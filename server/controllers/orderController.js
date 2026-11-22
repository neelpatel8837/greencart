import Order from "../models/Order.js";
import Product from "../models/Product.js";


// place order COD: /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;

    if (!address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);

      // HARD GUARD
      if (!product) {
        return res.json({
          success: false,
          message: "One of the products no longer exists",
        });
      }

      amount += product.offerPrice * item.quantity;
    }

    // add tax (2%)
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });

    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// get orders by user ID: /api/order/user

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;   // get from token, not body

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }]
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get all orders(for seller/admin) : /api/order/seller

export const getAllOrders = async(req,res)=>{
    try {
        const orders = await Order.find({
            $or: [{paymentType:'COD'}, {isPaid: true}]
        }).populate("items.product address");
        res.json({ success: true, orders});
    } catch (error) {
        res.json({ success: false, message: error.message})
    }
}
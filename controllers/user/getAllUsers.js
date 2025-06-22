import { User } from "../../models/user/index.js";
import 'dotenv/config';

export const getAllUsers = async (req, res) => {
    try {
        const getUserByUsername = await User.find().select("-password")

        return res.status(200).send({ status: 200, message: "All Users getting Successfully!", data: getUserByUsername })
    }
    catch (err) {
        return res.status(500).send({ status: 500, message: err.message })
    }
}
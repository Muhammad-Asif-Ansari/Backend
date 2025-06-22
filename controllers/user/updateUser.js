import { User } from "../../models/user/index.js";
import 'dotenv/config'


export const updateUser = async (req, res) => {
    try {
        await User.updateOne()
        return res.status(200).send({ status: 200, message: "User Update Successfully!" })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

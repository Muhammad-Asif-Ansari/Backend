import { User } from "../../models//user/index.js";
import 'dotenv/config'


export const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany()
        return res.status(200).send({ status: 200, message: "ALL Users Delete Successfully!" })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

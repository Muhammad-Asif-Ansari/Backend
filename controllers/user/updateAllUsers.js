import { User } from "../../models/user/index.js";
import 'dotenv/config'


export const updateAllUsers = async (req, res) => {
    try {
        const {email,otheremail} = req.body
       const result = await User.updateMany(
        {email},
        {$set:{email:otheremail}}
       )
        return res.status(200).send({ status: 200, message: "Update All Users Successfully!",data:result })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}

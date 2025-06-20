import User  from "../models/user/index.js";

export const CreateUser = async (req, res) => {
    const { username, email, password, phone } = req.body;
    // console.log("req-->", req.body);


    try {
        if (!(username && email && password && phone)) {
            return res.status(409).send({ status: 409, message: "All Fields are Required" })
        }

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            return res.status(409).send({ status: 409, message: "User Already Exits!", })
        }

        // const createUser = await User.create({
        //     username: username,
        //     email: email,
        //     phone: phone,
        //     password: password
        // })
        const createUser = await User.create(req.body)

        return res.status(200).send({ status: 200, message: "User Created Successfully!", data: createUser })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}
import Joi from 'joi';
import { Product } from "../../models/user/product.js";

const productValidationSchema = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    category:Joi.string().required(),
    description:Joi.string().required(),
    stock:Joi.number().required(),
})


export const CreateProduct = async (req, res) => {
    try{
    const { name, price, category, description, stock } = req.body;
    const existedProduct = await Product.findOne({ name })
    
            if (existedProduct) {
                return res.status(409).send({ status: 409, message: "Product Already Exits!", })
            }
    
            await productValidationSchema.validateAsync(req.body);
    
            // const passwordHash = await bcrypt.hash(password, 10)
    
            const CreateProduct = await Product.create({
                name: name,
                price: price,
                category: category,
                description: description,
                stock : stock
            })
            // const createUser = await User.create(req.body)
    //         await transporter.sendMail({
    //             from: '"Muhammad Asif Ansari" <muhammadasifansari101@gmail.com>',
    //             to: createUser.email,
    //             subject: "Welcome to Our Platform 🎉",
    //             text: `Hi ${createUser.username},
    
    // Welcome to our platform! Your account has been created successfully.
    // If you have any questions, feel free to reach out to me.
    // Best regards,
    // Muhammad Asif Ansari`
    //         });
    //  const token = jwt.sign({ _id: createUser._id, email: createUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
    
            // delete createUser.password
            return res.status(200).send({ status: 200, message: "Product Created Successfully!", data: CreateProduct })
        } catch (error) {
            return res.status(500).send({ status: 500, message: error.message })
    
        }
    }
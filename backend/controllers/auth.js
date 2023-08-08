import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const register = async (req, res, next) => {
    try {
        const { email, name, phone, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("exist");
            return res.status(409).json({ error: "User with this email already exists." });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("User has been created.")
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found"));
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password"));
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;

        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
}


// export const logout = async (req, res) => {
//     try {
//         res.cookie('access_token', ' ', {expires: new Date(0) } );
//         res.status(200).json({ message: 'Logout successful' });
//     } catch (error) {
//         console.error('Error during logout:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
// res.cookie("access_token",null, { path: "/", domain: "localhost", expires: new Date(Date.now()) , httpOnly: true });


export const checkLoggedIn = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ loggedIn: false });
    }

    jwt.verify(token, process.env.JWT, async (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ loggedIn: false });
        }

        try {
            // Fetch user data from the database based on the decoded token
            const user = await User.findById(decodedToken.id);

            // If the user is not found, return an error
            if (!user) {
                return res.status(404).json({ loggedIn: false, error: 'User not found' });
            }
            // If the token is valid and the user is found, return user data along with loggedIn: true
            const { _id , name, email, phone} = user;
            res.status(200).json({ loggedIn: true, user: { _id, name, email, phone } });
        } catch (error) {
            // Handle any errors that occurred during the database query
            console.error('Error fetching user data:', error);
            res.status(500).json({ loggedIn: false, error: 'Internal Server Error' });
        }
    });
};

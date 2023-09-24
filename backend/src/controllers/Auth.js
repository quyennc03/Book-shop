import { signinSchema, signupSchema } from "../schema/Auth"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const signup = async (req, res) => {
    try {
        // validate đầu vào
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                messages: errors,
            });
        }
        // Kiểm tra xem trong db có tài khoản này chưa
        const userExist = await User.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({
                messages: "Email đã tồn tại",
            });
        }
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Thêm tài khoản vào db
        const user = await User.create({ ...req.body, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, "bookShop", { expiresIn: "1d" });

        user.password = undefined;
        return res.status(200).json({
            message: "Tạo tài khoản thành công",
            user,
        });
    } catch (error) { }
};

export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                messages: errors,
            });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                messages: "Email không tồn tại",
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                messages: "Sai mật khẩu",
            });
        }

        const token = jwt.sign({ id: user._id }, "bookShop", { expiresIn: "1d" });

        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            user,
        });
    } catch (error) { }
};

export const getAll = async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(404).json({
                messages: 'Khong co tai khoan nao'
            })
        }
        return res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
}
export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id })
        if (!user) {
            return res.status(404).json({
                messages: 'Khong co tai khoan nao'
            })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}
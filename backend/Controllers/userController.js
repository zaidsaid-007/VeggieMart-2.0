import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login User

const loginUser = async (req, res) => {
  const { email, password } = req.body; // Removed name from destructuring

  // Validate email format
  if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
  }

  // Validate password length
  if (!validator.isLength(password, { min: 6 })) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  try {
      // Find user by email
      const user = await userModel.findOne({ email });

      // Check if user exists
      if (!user) {
          return res.status(404).json({ message: "User doesn't exist" });
      }

      // Compare password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Wrong password, try again" });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
      });

      // Respond with token
      return res.status(200).json({ token });
  } catch (error) {
      return res.status(500).json({ message: "Server error" });
  }
};

//Register User

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!validator.isLength(name, { min: 2 })) {
    return res
      .status(400)
      .json({ message: "Name must be at least 2 characters long" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  if (!validator.isLength(password, { min: 6 })) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
    //check if user is already registered
  try {
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Account already exists by that email" });
    }
    //Hashing user Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name:name,
        email:email,
        password: hashedPassword 
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res.status(201).json({ success: true, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export { loginUser, registerUser };
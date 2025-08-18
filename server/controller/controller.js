import formModel from "../database/model.js";
import mongoose from 'mongoose';
import { connectDB } from '../connect.js';

export const submit = async (req, res) => {
  try {
    await connectDB(); // Ensure DB connection
    let { name, number } = req.body;
    console.log(name);
    console.log(number);
    let form = new formModel({
      name,
      number,
    });

    await form.save();
    console.log(form)
    res.status(200).json({
      status: "success",
      message: "User retrieved successfully",
      data: form,
    });
  } catch (error) {
    console.log(error);
  }
};

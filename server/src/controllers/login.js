import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cleaner from "../models/cleaner.model.js";

export const register = async (req, res) => {
    const newCleaner = new cleaner({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      secondaryphone: req.body.secondaryphone,
      address: req.body.address,
      gender: req.body.gender,
      age: req.body.age,
      image: req.body.image,
    });
  
    try {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(req.body.password, salt);
      newCleaner.password = passwordHash;
  
      const savedCleaner = await newCleaner.save();
      res.status(200).json(savedCleaner);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




  
  export const login = async (req, res) => {
    try{
      const user = await cleaner.findOne({email: req.body.email});
      if (user){
         const pass = await bcrypt.compare(req.body.password, user.password)
         if(pass){
          const accesstoken = jwt.sign({
            email: user.email
          }, '1234', {expiresIn: "3d"})
          const {password, ...others} = user._doc
          res.status(200).json({...others, accesstoken})
         } else {
          res.status(401).json("Wrong credentials")
         }
      } else{
        res.status(401).json("Wrong credentials")
      }
    } catch(err){
      res.status(500).json({error: err.message})
    }
      
  }
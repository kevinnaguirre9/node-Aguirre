import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
     const {username, email, password, roles} = req.body;

     const newUser = new User({
          username, 
          email, 
          password: await User.encryptPassword(password), 
          //roles
     })

     const userSaved = await newUser.save()

     const token = jwt.sign({id: userSaved._id}, config.SECRET, {
          expiresIn: 864000
     })

     res.json(token)
}

export const signIn = async (req, res) => {
}
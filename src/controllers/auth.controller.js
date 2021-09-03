import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
     const {username, email, password, roles} = req.body;

     const newUser = new User({
          username, 
          email, 
          password: await User.encryptPassword(password), 
          roles
     })

     if(roles) {
          const foundRoles = await Role.find({name: {$in: roles}})
          newUser.roles = foundRoles.map(role => role._id)
     }else{
          const role = await Role.findOne({name: "user"})
          newUser.roles = [role._id]
     }

     const userSaved = await newUser.save()

     const token = jwt.sign({id: userSaved._id}, config.SECRET, {
          expiresIn: 864000
     })

     res.json(token)
}

export const signIn = async (req, res) => {
}
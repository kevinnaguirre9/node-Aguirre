import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const verifyToken = async(req, res, next) => {
     let token = req.headers["x-access-token"];
     if (!token) return res.status(403).json({ message: "No token provided" });

     try {
          const decoded = jwt.verify(token, config.SECRET);

          const user = await User.findById(decoded.id, { password: 0 });
          if (!user) return res.status(404).json({ message: "No user found" });

          next();
     } catch (error) {
          console.log(error)
          return res.status(401).json({ message: "Unauthorized!" });
     }
}

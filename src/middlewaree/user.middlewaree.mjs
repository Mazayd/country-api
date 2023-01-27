import  Jwt  from "jsonwebtoken";
import { secret } from "../lib/config.mjs";

export const usermMiddlewaree = (req, res, next) => {
    if (req.method === 'OPTIONS'){
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({message: 'User not authorized'});
        }
        const decodeData = Jwt.verify(token, secret)
        req.user = decodeData;
        next()

    }catch(e){
        console.log(e);
        return res.status(403).json({message: 'User not authorized'});
    }
}
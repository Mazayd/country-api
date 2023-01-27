import  Jwt  from "jsonwebtoken";
import { secret } from "../lib/config.mjs";

export const adminMiddlewaree = (roles) => {
    return function (req, res, next){
        if (req.method === 'OPTIONS'){
            next();
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: 'User not authorized'});
            }
            const {roles: userRoles} = Jwt.verify(token, secret)
            let hasRole = false;
            userRoles.forEach(role => {
                if (roles.includes(role)){
                    hasRole = true;
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: 'You dont have access'})
            }
            next()
    
        }catch(e){
            console.log(e);
            return res.status(403).json({message: 'User not authorized'});
        }
    }
}
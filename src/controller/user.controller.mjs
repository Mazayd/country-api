import { User } from "../shema/user.shema.mjs";
import { Role } from "../shema/role.shema.mjs";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import  Jwt  from "jsonwebtoken";
import { secret } from "../lib/config.mjs";

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return Jwt.sign(payload, secret, {expiresIn: '24h'})
}

export class UserController{

        async registration(req, res){
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({massage: 'Registration error', errors})
                }

                const {username, password} = req.body;
                const candidate = await User.findOne({username});
                if (candidate) {
                    return res.status(400).json({message: 'A user with the same name already exists'})
                };
                const hashPassword = bcrypt.hashSync(password, 7);
                const userRole = await Role.findOne({value:'ADMIN'});
                const user = new User({username, password: hashPassword, roles: [userRole.value]});
                await user.save();
                return res.json({massage: 'User successfully registered'});
            } catch (e) {
                console.log(e);
                res.status(400).json({message: 'Registration error'});
            }
        }

        
        async login(req, res){
            try{
                const {username, password} = req.body;
                const user = await User.findOne({username});
                if (!user) {
                    return res.status(400).json({message:'User ${username} is not found'});
                }
                const validPassword = bcrypt.compareSync(password, user.password);
                if (!validPassword) {
                    return res.status(400).json({message:'Wrong password entered'});
                }
                const token = generateAccessToken(user._id, user.roles);
                return res.json({token})
            } catch (e) {
                console.log(e);
                res.status(400).json({message: 'Login error'});
            }
        }

        
        async getUsers(req, res) {
            try { 
                const users = await User.find();
                res.json(users);
            } catch (e) {
                console.log(e);
            }
           
        }
    }
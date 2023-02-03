// import express, { Request, Response, NextFunction } from 'express'
// import { UserInstance, UserAttribute } from "../model/user"

// export const createUser = async (req: Request, res: Response, next: NextFunction) => {
//     const {
//         email,
//         password,
//         firstName,
//         lastName,
//         address,
//         phone, } = req.body
//     try {
//         const User = await UserInstance.findOne({ where: { email: email } });
//         if (User) {
//             return res.status(400).json({
//                 message: "Email already exist!",
//             });
//         }

//         if (!User) {

//             const user = await UserInstance.create({
//                 email,
//                 password,
//                 firstName,
//                 lastName,
//                 address,
//                 phone,
//             })
//             return res.status(200).json({
//                 message: "Added successful",
//                 user

//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
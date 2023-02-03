// import { DataTypes, Model } from "sequelize";
// import { db } from "../config/config";
// import { ProductInstance } from "./product";


// export interface UserAttribute {
//     [x: string]: any;
//     id: string;
//     email: string;
//     password: string
//     firstName: string;
//     lastName: string;
//     address: string;
//     phone: string;
//     // salt: string;
//     // otp: number;
//     // otp_expiry: Date;
//     // lng: number;
//     // lat: number;
//     // verified: boolean;
//     // role: string;

// }

// export class UserInstance extends Model<UserAttribute>{
//     declare id: string;
//     declare email: string;
//     declare password: string
//     declare firstName: string;
//     declare lastName: string;
//     declare address: string;
//     declare phone: string;
// }

// UserInstance.init({
//     id: {


//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         // defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             notNull: {
//                 msg: "Email address"
//             },
//             isEmail: {
//                 msg: "Please input a Valid mail"
//             }
//         }
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notNull: {
//                 msg: "Password is Required"
//             }, notEmpty: {
//                 msg: "Provide a Password"
//             }
//         }
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     lastName: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     address: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notNull: {
//                 msg: "Phone number is requires"
//             },
//             notEmpty: {
//                 msg: "Provide a Phone number"
//             }
//         }
//     },
//     // salt: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false,

//     // },
//     // otp: {
//     //     type: DataTypes.NUMBER,
//     //     allowNull: false,
//     //     validate: {
//     //         notNull: {
//     //             msg: "OTP is requires"
//     //         },
//     //         notEmpty: {
//     //             msg: "Provide an OTP"
//     //         }
//     //     }
//     // },
//     // otp_expiry: {
//     //     type: DataTypes.DATE,
//     //     allowNull: false,
//     //     validate: {
//     //         notNull: {
//     //             msg: "OTP Expired"
//     //         }
//     //     }
//     // },
//     // lng: {
//     //     type: DataTypes.NUMBER,
//     //     allowNull: true
//     // },
//     // lat: {
//     //     type: DataTypes.NUMBER,
//     //     allowNull: true
//     // },
//     // verified: {
//     //     type: DataTypes.BOOLEAN,
//     //     allowNull: true,
//     //     validate: {
//     //         notNull: {
//     //             msg: "User must be verified"
//     //         },
//     //         notEmpty: {
//     //             msg: "User not Verified"
//     //         }
//     //     }
//     // },
//     // role: {
//     //     type: DataTypes.STRING,
//     //     allowNull: true
//     // },
//     // superAdmin: {
//     //     type: DataTypes.STRING,
//     //     allowNull: true
//     // },

// },
//     {
//         timestamps: false,
//         sequelize: db,
//         tableName: 'user'
//     }
// );

// ProductInstance.belongsTo(UserInstance, { constraints: true, onDelete: "CASCADE" })
// UserInstance.hasMany(ProductInstance)

import express from "express";
import { UserInstance } from "../../model/user";

// declare global {
//     namespace Express {
//         interface Request {
//             user?: Record<string, any>
//         }
//     }
// }
// declare namespace Express {
//     interface Request {
//         customProperties: string[];
//     }
// }

declare global {
    namespace Express {
        interface Request {
            user?: UserInstance
        }
    }
}
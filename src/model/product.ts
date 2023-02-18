// import { DataTypes, Model } from 'sequelize'
// import { db } from '../config/config'

// export interface ProductAttribute {
//     [x: string]: any;
//     id: string;
//     title: string;
//     price: number;
//     image: string;
//     description: string;
//     userId: string
// }

// export class ProductInstance extends Model<ProductAttribute>{
//     declare id: string;
//     declare title: string;
//     declare price: number;
//     declare image: string;
//     declare description: string;
//     declare userId: string
// }



// ProductInstance.init({
//     id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//     },
//     title: {
//         type: DataTypes.STRING,
//         unique: true

//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     },

//     image: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     // userId: {
//     //     type: DataTypes.UUID,
//     //     allowNull: false,
//     // }

// },

//     {
//         sequelize: db,
//         tableName: 'product'
//     })



// const products: any = []

// // export interface Product{

// // }

// module.exports = class Product {
//     private title: string
//     constructor(title: string) {
//         this.title = title
//     }
//     save() {
//         products.push(this)
//     }
//     static fetchAll(): Product[] {
//         return products
//     }
// }

// import * as fs from "fs";
// import path from "path"
// // import { products } from "../routes/admin";

// export class Product {
//     private static products: Product[] = []
//     private title: string;

//     constructor(titles: string) {
//         this.title = titles
//     }

//     save() {
//         // Product.products.push(this)
//         const fileSave: any = path.join(path.dirname(process.mainModule?.filename), "data", products.json)

//         fs.readFile(fileSave, (err, fileContent) => {
//             let products = [];
//             if (!err) {
//                 products = JSON.parse(fileContent)
//             }
//             products.push(this)
//             fs.writeFile(fileSave, JSON.stringify(products), (err) => {
//                 console.log(err)
//             })
//         })
//     }

//     static fetchAll(): Product[] {
//         return Product.products
//     }
// }


// import fs from "fs";
// import path from "path";

// interface ProductData {
//     title: string;
// }

// export class Product {
//     private static fileSave = path.join(
//         path.dirname(require.main?.filename || ""),
//         "data",
//         "products.json"
//     );
//     private static products: ProductData[] = [];

//     constructor(public title: string) { }

//     save() {
//         fs.readFile(Product.fileSave, (err, fileContent) => {
//             if (!err) {
//                 Product.products = JSON.parse(fileContent.toString());
//             }
//             Product.products.push({ title: this.title });
//             fs.writeFile(
//                 Product.fileSave,
//                 JSON.stringify(Product.products),
//                 (err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                 }
//             );
//         });
//     }

//     static fetchAll() {
//         fs.readFile()
//         return Product.products;
//     }
// }




import * as fs from "fs";
import path from "path";

interface ProductData {
    title: string;
}

export class Product {
    private static fileSave = path.join(process.cwd(), "data", "products.json");

    constructor(public title: string) { }

    save() {
        fs.readFile(Product.fileSave, (err, fileContent) => {
            let products: ProductData[] = [];
            if (!err) {
                products = JSON.parse(fileContent.toString());
            }
            products.push({ title: this.title });
            fs.writeFileSync(
                Product.fileSave,
                JSON.stringify(products)
            );
        });
    }

    static fetchAll(cb: (products: ProductData[]) => void) {
        fs.readFile(Product.fileSave, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                cb(JSON.parse(fileContent.toString()));
            }
        });
    }
}

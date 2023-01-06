import { DataTypes, Model } from 'sequelize'
import { db } from '../config/config'

export interface ProductAttribute {
    [x: string]: any;
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    userId: string
}

export class ProductInstance extends Model<ProductAttribute>{
    declare id: string;
    declare title: string;
    declare price: number;
    declare image: string;
    declare description: string;
    declare userId: string
}



ProductInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        unique: true

    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // userId: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    // }

},

    {
        sequelize: db,
        tableName: 'product'
    })



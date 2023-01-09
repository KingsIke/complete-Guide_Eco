import express, { Request, Response, NextFunction } from "express"
// import adminRoutes from './routes/admin'
import logger from "morgan"
import Error from "http-errors"
import cookieParser from "cookie-parser"
import { connectDB } from "./config/config"
import shopRoutes from './routes/shop'
import adminRoutes from './routes/admin'
import userRoutes from './routes/user'
import { UserAttribute, UserInstance } from "./model/user"
import { where } from "sequelize"
import path from "path"





const app = express()



connectDB()

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '.././', 'views'));
// app.set('layout', 'layouts/layout');



app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.././', 'public')))
// app.use()


// app.use((req: Request, res: Response, next: NextFunction) => {
//     UserInstance.findByPk(1)
//         .then(user => {
//             req.user = user;
//             next()
//         }).catch(err => console.log(err))
// // })
// app.set('view engine', 'ejs')
// app.set("views", "views");

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)
app.use('/user', userRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('404', { title: '404' })
})


app.listen(3040, () => {
    console.log('On Port 3040 page 72')
})
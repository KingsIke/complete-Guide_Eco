import express, { Request, Response, NextFunction, Router } from "express"
// import { Router } from "express";
import path from "path"
import { getAddProduct, createAddProduct } from "../controllers/products"

const router = Router()

export const products: any[] = []

router.get('/add-product', getAddProduct)
router.post('/add-product', createAddProduct)

export default router

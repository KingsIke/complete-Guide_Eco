import express, { Request, Response, NextFunction } from "express"

export const errorPage = async (req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('404', { pageTitle: '404' })
}
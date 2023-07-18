import { Request, Response } from 'express';

export const getCustomerById = (req: Request, res: Response) => {
    const customerId = req.params.id;

    if (Number(customerId) > 10) {
        throw new Error("kakakaka");
    }

    res.status(200).json({ customerId });
    return;
}

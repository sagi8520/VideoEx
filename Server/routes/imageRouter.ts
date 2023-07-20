import express, { Request, Response } from 'express';

const router = express();

//ImageRouter
router.post('/', (req: Request, res: Response) => {
    res.send('Hello, Express!')
});

router.post('/:id', (req: Request, res: Response) => {
    const imageId = req.params.id;
    const yossi = req.body.yossi;
    res.status(200).send(`Yarin Hadad: ${imageId} ${yossi}`);
    return;
});

export default router;
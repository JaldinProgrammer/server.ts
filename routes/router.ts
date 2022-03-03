import {Router, Request, Response} from 'express';

const router = Router();


router.get('/get', (req: Request, res: Response) => {
    res.json({
        ok:true,
        mensaje: 'get - READY'
    });
});

router.post('/post', (req: Request, res: Response,) =>{
    res.json({
        ok:true,
        mensaje: 'POST - READY',
        data: req.body
    });
});


export default router;
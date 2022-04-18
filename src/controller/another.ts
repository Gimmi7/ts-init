import { Request, Response } from 'express';
import { router } from '@/config/expressConfig';

router.get("/another", (req: Request, res: Response) => {
  return res.send('another' + new Date())
})
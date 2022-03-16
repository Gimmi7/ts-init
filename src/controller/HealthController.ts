import { Request, Response } from 'express';
import { router } from '@/config/expressConfig';
import config from '@/resources/application'
import { log } from '@/config/logConifg';

router.get("/health", (req: Request, res: Response) => {
  log.info("health: %o run at port %o  !", config.server.name, config.server.port)
  return res.send(config.server)
})
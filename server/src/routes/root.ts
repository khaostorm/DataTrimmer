import { Router } from 'express';
const rootRouter = Router();

rootRouter.get('/', (req, res) => {
	res.status(200).json({
		status: 'ok',
	});
	return;
});

export { rootRouter };

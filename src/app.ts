import express from 'express';
import ordersRouter from './routes/orders.router';
import productsRouter from './routes/products.router';
import usersRouter from './routes/users.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

export default app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const dotenv = require('dotenv');
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const apiPort = process.env.DB_PORT;
const apiName = process.env.DB_NAME;

const bebidasRouter = require('./src/routes/bebidasRouter');
const clientesRouter = require('./src/routes/clientesRouter');
const lanchesRouter = require('./src/routes/lanchesRouter');
const pedidosRouter = require('./src/routes/pedidosRouter');
const pizzasRouter = require('./src/routes/pizzasRouter');
const porcoesRouter = require('./src/routes/porcoesRouter');

app.use('/bebidas', bebidasRouter)
app.use('/clientes', clientesRouter)
app.use('/lanches', lanchesRouter)
app.use('/pedidos', pedidosRouter)
app.use('/pizzas', pizzasRouter)
app.use('/porcoes', porcoesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3550', () => console.log("Servidor rodando na porta 3550"))


module.exports = app;

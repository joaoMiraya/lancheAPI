const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use(cookieParser());
app.use(compression());
app.use(cors());
const corsOptions = {
  origin: [process.env.APP_URL], // lista de domínios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // lista de métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // lista de headers permitidos
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


const acrescimoRouter = require('./src/routes/acrescimoRouter');
const bebidasRouter = require('./src/routes/bebidasRouter');
const clientesRouter = require('./src/routes/clientesRouter');
const lanchesRouter = require('./src/routes/lanchesRouter');
const pedidosRouter = require('./src/routes/pedidosRouter');
const pizzasRouter = require('./src/routes/pizzasRouter');
const porcoesRouter = require('./src/routes/porcoesRouter');
const authRouter = require('./src/routes/authRouter');



app.use('/acrescimos', acrescimoRouter);
app.use('/bebidas', bebidasRouter);
app.use('/clientes', clientesRouter);
app.use('/lanches', lanchesRouter);
app.use('/pedidos', pedidosRouter);
app.use('/pizzas', pizzasRouter);
app.use('/porcoes', porcoesRouter);
app.use('/auth', authRouter);

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

app.listen(process.env.API_PORT, () => console.log(`Servidor rodando na porta ${process.env.API_PORT}`))


module.exports = app;

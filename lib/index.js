const express = require('express');

const app = express();

const parser = require('body-parser');

app.use(parser.json());

app.use(require('./routes/climate'));
app.use(require('./routes/emissions'));
app.use(require('./routes/glaciers'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

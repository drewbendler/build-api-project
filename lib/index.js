const express = require('express');

const app = express();

const parser = require('body-parser');

app.use(parser.json());

const cors = require('cors');

app.use(cors());

app.use(require('./routes/climate'));
app.use(require('./routes/emissions'));
app.use(require('./routes/glaciers'));

// app.set('port', process.env.PORT || 4000);

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });

app.listen(4000, () => {
  console.log('server running on port 4000');
});

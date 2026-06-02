require('express-async-errors');
const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const helmet  = require('helmet');
const officeRoutes = require('./routes/office.routes.js');
require('dotenv').config();

require('./utils/firebase'); 
const app  = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'DhallahTec Backend is running ✅' });
});
const complaintRoutes = require('./routes/complaint.routes'); 


app.use('/api/complaints', complaintRoutes);
app.use('/api/customer', complaintRoutes);
app.use('/api/communication', require('./routes/communication.routes')); 
app.use('/api/admin', require('./routes/admin.routes')); 
app.use('/api/items', require('./routes/item.routes'));
app.use('/api/officer', require('./routes/office.routes'));
app.use('/api/matches', require('./routes/match.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/office', officeRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


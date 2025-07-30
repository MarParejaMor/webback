require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');

// Configuración de Passport
require('./config/passport');

// Rutas
const accountRoutes = require('./routes/accountRoutes');
const eventRoutes = require('./routes/eventRoutes');
const processRoutes = require('./routes/processRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const adviceRoutes = require('./routes/legalAdviceRoutes');
const auditoryRoutes = require('./routes/auditoryLogRoutes');
const observationRoutes = require('./routes/observationRoutes');
const evidenceRoutes = require('./routes/evidenceRoutes');
const qualificationRoutes = require('./routes/qualificationRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const authRoutes = require('./routes/authRoutes');

// Inicializar app
const app = express();

// Middleware de CORS (solo frontend permitido en desarrollo)
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(
  session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/legalsystem', accountRoutes);
app.use('/legalsystem', eventRoutes);
app.use('/legalsystem', processRoutes);
app.use('/legalsystem', appointmentRoutes);
app.use('/legalsystem', reminderRoutes);
app.use('/legalsystem', adviceRoutes);
app.use('/legalsystem', auditoryRoutes);
app.use('/legalsystem', observationRoutes);
app.use('/legalsystem', evidenceRoutes);
app.use('/legalsystem', qualificationRoutes);
app.use('/legalsystem', userProfileRoutes);
app.use('/auth', authRoutes);

// Conexión a MongoDB y arranque del servidor
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `🚀 Servidor corriendo en el puerto ${process.env.PORT || 3000}`
      );
    });
  })
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));

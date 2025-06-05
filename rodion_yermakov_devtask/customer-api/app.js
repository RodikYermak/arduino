const express = require('express');
const swaggerSpec = require('./utils/swaggerConfig');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');

// mongoose
//     .connect(
//         'mongodb+srv://rodionyermakovsd:<password>@cluster0.lgqzxdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//     )
//     .then(() => console.log('DB ok'))
//     .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use('/ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', customerRoutes);

const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log(`Server is up and running on port ${PORT}`);
});

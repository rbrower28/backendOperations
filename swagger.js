const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Client DB',
    description: 'Manage client data',
  },
  host: 'subitt-application-clientdemo.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
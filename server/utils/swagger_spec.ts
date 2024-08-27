import swaggerDocs from 'swagger-jsdoc';

const swaggerOptions = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server"
      }
    ],
   components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          in: "header",
          name: "Authorization",
          description: "Bearer token to access api endpoints",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/**.ts', `${__dirname}/routes/*.ts`],
};

export const swaggerSpec = swaggerDocs(swaggerOptions);
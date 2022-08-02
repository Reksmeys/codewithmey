module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '997f33b4056160881d3b8fec9ee5c3fb'),
  },
});

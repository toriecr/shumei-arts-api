module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7b3ff1f3a8880314f2ba6595636e899d'),
    },
  },
});

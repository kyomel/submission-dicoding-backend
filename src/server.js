const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server Running At ${server.info.uri}`);
};

init();

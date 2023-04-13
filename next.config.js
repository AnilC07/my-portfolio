const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        EMAIL: "contact.anil.dev@gmail.com",
        PASSWORD: "fmqdcvziffgjqajm",
        MONGODB_USER: "anilcelik075",
        MONGODB_PASSWORD: "rbEGImy6qz912bxo",
        MONGODB_CLUSTER_NAME: "cluster0",
        MONGODB_DATABASE_NAME: "visiteurs-dev",
      },
    };
  }

  return {
    env: {
      EMAIL: "contact.anil.dev@gmail.com",
      PASSWORD: "fmqdcvziffgjqajm",
      mongodb_username: "anilcelik075",
      MONGODB_PASSWORD: "rbEGImy6qz912bxo",
      MONGODB_CLUSTER_NAME: "cluster0",
      MONGODB_DATABASE_NAME: "visiteurs-prod",
    },
  };
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        EMAIL: "contact.anil.dev@gmail.com",
        PASSWORD: "fmqdcvziffgjqajm",
        MONGODB_USER: "anilcelik075",
        MONGODB_PASSWORD: "0DAcIsZKXFNRrYob",
        MONGODB_CLUSTER_NAME: "cluster0",
        MONGODB_DATABASE_NAME: "portfolio-dev",
      },
    };
  }

  return {
    env: {
      EMAIL: "contact.anil.dev@gmail.com",
      PASSWORD: "fmqdcvziffgjqajm",
      MONGODB_USER: "anilcelik075",
      MONGODB_PASSWORD: "0DAcIsZKXFNRrYob",
      MONGODB_CLUSTER_NAME: "cluster0",
      MONGODB_DATABASE_NAME: "portfolio",
    },
  };
};

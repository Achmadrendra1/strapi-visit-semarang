module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: require("./SERVICE_ACCOUNT_KEY.json"),
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true, // true | false
        debug: true, // true | false
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      info: { version: "2.0.0" },
    },
  },
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  // ...
});

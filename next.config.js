const { withKeystone } = require("@keystone-next/keystone/next");
module.exports = withKeystone({
  images: {
    domains: ["i.ytimg.com"],
  },
});

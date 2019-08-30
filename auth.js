const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
var oktaClient = new okta.Client({
    orgUrl: 'https://dev-714043.okta.com',
    token: '00NWUOMR7Saalrz0dsf_h0gMmUeVzV6RyndqbyqWv9'
  });

const oidc = new ExpressOIDC({
  issuer: "https://dev-714043.okta.com/oauth2/default",
  client_id: '0oauk5q2kVXggczEs356',
  client_secret: 'Qip9QnmZXhIWz_APSVz13yYQDlqO1devwK7ZggQZ',
  redirect_uri: 'http://localhost:3000/users/callback',
  scope: "openid profile",
  routes: {
    login: {
      path: "/users/login"
    },
    callback: {
      path: "/users/callback",
      defaultRedirect: "/dashboard"
    }
  }
});
module.exports = { oidc, oktaClient };

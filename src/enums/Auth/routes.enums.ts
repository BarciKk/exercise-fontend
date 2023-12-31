enum UnauthorizedRoutes {
  login = "/",
  register = "/accounts/register",
  resetPassword = "/accounts/password/reset",
  termsAndConditions = "/TermsAndConditions",
}
enum AuthorizedRoutes {
  dashboard = "/dashboard",
}

export { AuthorizedRoutes, UnauthorizedRoutes };

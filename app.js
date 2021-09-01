const wwwRedirect = (option) => (req, res, next) => {
  const host = req.headers.host;
  return option
    ? "www" === option
      ? host.match(/^www\..*/i)
        ? next()
        : res.redirect(301, `${req.protocol}://www.${host}${req.url}`)
      : "non-www" === option && null !== host.match(/^www/)
      ? res.redirect(
          301,
          `${req.protocol}://${host.replace(/^www\./, "")}${req.url}`
        )
      : next()
    : next();
};
module.exports = wwwRedirect;

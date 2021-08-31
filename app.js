const redirect = (option) => (req, res, next) => {
  const host = req.headers.host;
  return option
    ? "www" === option
      ? host.match(/^www\..*/i)
        ? next()
        : res.redirect(301, "http://www." + host)
      : "non-www" === option && null !== host.match(/^www/)
      ? res.redirect(301, "http://" + host.replace(/^www\./, "") + req.url)
      : next()
    : next();
};

module.exports = redirect;

/**
 * Authorization Middleware (RBAC)
 * Role-Based Access Control untuk Health E-Commerce
 */

function authorizeRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access forbidden. Required role: ${allowedRoles.join(
          " or "
        )}`,
      });
    }

    next();
  };
}

module.exports = { authorizeRole };

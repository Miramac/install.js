//install.js
module.exports = function(install) {
  install.copy("%src-dir%/bin", "%install-dir%/bin");
  install.on("error", function(err) {
    throw err;
  });
};


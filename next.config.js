const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @param {string} phase @returns {import('next').NextConfig} */
module.exports = (phase) => ({
  // Validate static export during the build; serve project routes normally in dev.
  output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : "export",
  // A running preview must not overwrite production build manifests.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  images: { unoptimized: true },
});

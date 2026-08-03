import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep file tracing inside this standalone portfolio workspace.
  outputFileTracingRoot: __dirname
};

export default nextConfig;

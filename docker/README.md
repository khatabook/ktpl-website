# Docker Setup for KTPL Website

This directory contains Docker configuration files for the KTPL website Next.js application.

## Files Overview

- `Dockerfile` - Production-ready multi-stage Docker build
- `docker-compose.yml` - Docker Compose configuration

## Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   cd docker
   docker-compose up --build
   ```

2. **Or build and run manually:**
   ```bash
   # Build the image
   docker build -f docker/Dockerfile -t ktpl-website .
   
   # Run the container
   docker run -p 3000:3000 ktpl-website
   ```

## Image Optimization Features

The production Dockerfile includes several optimizations for a lightweight image:

- **Multi-stage build** - Separates build dependencies from runtime
- **Alpine Linux base** - Minimal Linux distribution (~5MB base)
- **Standalone Next.js output** - Only includes necessary files
- **Non-root user** - Runs as `nextjs` user for security
- **Production dependencies only** - Excludes dev dependencies in final image
- **Output file tracing** - Leverages Next.js built-in optimization

## Expected Image Size

- **Production image**: ~150-200MB (significantly smaller than typical Node.js images)

## Environment Variables

The application supports the following environment variables:

- `NODE_ENV` - Set to `production` for production builds
- `NEXT_TELEMETRY_DISABLED` - Disables Next.js telemetry (set to `1`)
- `PORT` - Application port (default: 3000)
- `HOSTNAME` - Hostname binding (default: 0.0.0.0)

## Health Checks

The production setup includes health checks that:
- Check if the application is responding on port 3000
- Run every 30 seconds
- Allow 3 retries before marking as unhealthy
- Wait 40 seconds before starting checks

## Troubleshooting

### Build Issues

1. **Clear Docker cache:**
   ```bash
   docker system prune -a
   ```

2. **Rebuild without cache:**
   ```bash
   docker-compose build --no-cache
   ```

### Runtime Issues

1. **Check container logs:**
   ```bash
   docker-compose logs ktpl-website
   ```

2. **Access container shell:**
   ```bash
   docker-compose exec ktpl-website sh
   ```

### Port Conflicts

If port 3000 is already in use:

1. **Change port in docker-compose.yml:**
   ```yaml
   ports:
     - "3001:3000"  # Use port 3001 instead
   ```

2. **Or stop conflicting service:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

## Security Notes

- The production container runs as a non-root user (`nextjs`)
- Only necessary files are included in the final image
- Development dependencies are excluded from production builds
- Health checks help monitor application status

## Performance Tips

1. **Use .dockerignore** - Already configured to exclude unnecessary files
2. **Leverage Docker layer caching** - Dependencies are installed before copying source code
3. **Use multi-stage builds** - Keeps final image minimal
4. **Enable Next.js standalone output** - Reduces bundle size

## Monitoring

The application includes health checks and can be monitored using:

- Docker health check status
- Application logs via `docker-compose logs`
- Container resource usage via `docker stats`

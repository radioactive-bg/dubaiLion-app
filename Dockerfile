# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Accept build-time environment (staging/production)
ARG BUILD_ENV=production
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

COPY app/package*.json ./
RUN npm install

COPY app/ ./
RUN echo "Building for ${BUILD_ENV} with API URL ${VITE_API_URL}"
RUN npm run build

# Final stage - Node.js server
FROM node:20-alpine

WORKDIR /app

# Create a package.json file with all required dependencies
COPY package.json ./
RUN npm install

# Copy frontend build from builder stage
COPY --from=builder /app/dist /app/dist

# Copy server file
COPY server.js /app/

# Optional runtime config injection
COPY ./env.sh /app/env.sh
RUN chmod +x /app/env.sh

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80

# Start Node.js server
CMD ["node", "server.js"]

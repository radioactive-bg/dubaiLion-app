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

# Production runtime stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional runtime config injection
COPY ./env.sh /docker-entrypoint.d/40-env.sh
RUN chmod +x /docker-entrypoint.d/40-env.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

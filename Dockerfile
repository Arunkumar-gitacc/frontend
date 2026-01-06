# # ---------- Build stage ----------
# FROM node:18-alpine AS build

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

## # Install dependencies
# RUN npm install --legacy-peer-deps

# # Copy rest of the source
# COPY . .

# # Build React app
# RUN npm run build

# # ---------- Runtime stage ----------
# FROM nginx:alpine

# # Copy build output to nginx
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# =========================
# 1️⃣ Build stage
# =========================
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# IMPORTANT: legacy-peer-deps (required for your deps)
RUN npm install --legacy-peer-deps

# Copy full source
COPY . .

# Build React app
RUN npm run build


# =========================
# 2️⃣ Runtime stage
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

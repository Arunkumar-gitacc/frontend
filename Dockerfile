# # ---------- Build stage ----------
# FROM node:18-alpine AS build

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
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

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the source code
COPY . .

# Build React app
RUN npm run build


# =========================
# 2️⃣ Runtime stage
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom nginx config (disables cache issues)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

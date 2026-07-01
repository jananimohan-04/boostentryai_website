# --- 1) Build Stage (Node >= 20.9 required for Next 16) ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only manifest first for better cache
COPY package.json package-lock.json* ./

# Peer-deps workaround for React19 + vaul
RUN npm install --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build


# --- 2) Runtime Stage ---
FROM node:22-alpine

WORKDIR /app

# Copy compiled app + node_modules from builder
COPY --from=builder /app /app

# Environment
ENV NODE_ENV=production
ENV PORT=30017
ENV NEXT_TELEMETRY_DISABLED=1

# The app will listen on 30017
EXPOSE 30017

# Use your package.json start script (make sure it has: next start -p 30017 -H 0.0.0.0)
CMD ["npm", "run", "start"]

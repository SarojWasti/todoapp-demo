# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using a lightweight server
FROM nginx:alpine

# Copy the built files from the first stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

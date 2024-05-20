
FROM node:20-alpine AS builder

WORKDIR /mmadmin

COPY . .

RUN npm install

RUN npm run build

# Step 2: Use NGINX image to serve the built application
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy the built application from the previous stage
COPY --from=builder /mmadmin/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

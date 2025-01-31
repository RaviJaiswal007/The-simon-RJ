# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your project files to Nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

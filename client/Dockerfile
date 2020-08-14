# Step 1: Build the Vue application
FROM node:latest AS build

# set the main  working directory
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli 

COPY . /app

# Build the app
RUN npm run build

# Step 2: Serve the app from Nginx
FROM nginx:1.17.0-alpine

# Copy the vue build from Step 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port to the Docker host
EXPOSE 8081

# CMD [ "/bin/bash", "-c", "sudo nginx -g 'daemon off;'" ]
# CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

CMD ["nginx","-g","daemon off;"] 
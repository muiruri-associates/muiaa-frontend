# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn.lock ./

# Install app dependencies
RUN yarn

# Copy the rest of the app source code to the working directory
COPY . .

# Build the React app
RUN yarn run build

# Expose the app's port (you may change this as needed)
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

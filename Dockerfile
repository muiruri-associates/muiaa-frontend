# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app (you may adjust this command depending on your setup)
RUN yarn build

# Expose a port (e.g., 3000) if your app requires it
EXPOSE 3000

# Start your application
CMD ["yarn", "start"]

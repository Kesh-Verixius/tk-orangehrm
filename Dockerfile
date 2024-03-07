# Use an official Node.js image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Cypress dependencies
RUN npm install --save-dev cypress@latest

# Copy the remaining project files to the working directory
COPY . .

# Set the default command to run Cypress tests
CMD ["npm", "run", "test:cypress"]
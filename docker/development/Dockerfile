FROM node:18-alpine

WORKDIR /app

# Kopiraj vse datoteke in namesti odvisnosti
COPY package.json package-lock.json ./
RUN npm install

# Kopiraj celotno kodo in izvedi build
COPY . .
RUN npm run build

# Izpostavi port
EXPOSE 3000
CMD ["node", "server.js"]

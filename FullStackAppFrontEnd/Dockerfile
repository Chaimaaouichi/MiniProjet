FROM node:16
WORKDIR /front
COPY package.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm","start"] 

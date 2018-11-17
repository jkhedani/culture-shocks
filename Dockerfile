# Copy build over form previous step
FROM node:10.13.0-alpine
WORKDIR /home/node/

# Copy build from local dir
COPY ./dist /home/node/dist 

# Install serve and expose!
RUN yarn global add serve
CMD ["serve", "-s", "-l", "3000", "dist/"]
EXPOSE 3000
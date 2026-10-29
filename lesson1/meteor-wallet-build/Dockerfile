FROM node:14.18.1-slim

WORKDIR /app
COPY bundle/ /app/

# Install the server's npm dependencies inside the image
RUN cd programs/server && npm install --omit=dev

ENV PORT=3000
EXPOSE 3000

CMD ["node", "main.js"]
FROM ubuntu:zesty

RUN apt-get update && apt-get install -y \
	nodejs \
	npm \
	tesseract-ocr

RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /app

COPY package.json /app
RUN npm update && npm install

COPY . /app

EXPOSE 3000

CMD npm start

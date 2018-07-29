FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app
ADD entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["watch", "ls"]

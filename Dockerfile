FROM node:alpine3.14

ARG uname
ARG uid
ARG gid

RUN apk --update add --no-cache \
  sudo \
  bash \
  grep \
  curl \
  wget \
  g++ \
  make \
  autoconf \
  shadow

# Add the user to the group.
RUN groupadd -g $gid -o $uname && \
  useradd -m -u $uid -g $gid -o -s /bin/sh $uname

WORKDIR /var/www
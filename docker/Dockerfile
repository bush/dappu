FROM python:2.7.7 
RUN apt-get update && apt-get install -y --force-yes git curl sudo
ENV HOME=/root
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
#RUN . /root/.bashrc && nvm install 10.16.3 && npm config set user 0 && npm config set unsafe-perm true && npm install -g node-gyp@3.6.2 && npm install -g truffle@5.1.39 
RUN . /root/.bashrc && nvm install 10.16.3 && \
      npm install -g --unsafe-perm=true --allow-root node-gyp@3.6.2 && \
      npm install -g --unsafe-perm=true --allow-root truffle@5.1.39 
RUN mkdir /app
WORKDIR /app
CMD /bin/bash

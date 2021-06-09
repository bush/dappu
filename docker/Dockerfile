FROM python:2.7.7 
RUN apt-get update && apt-get install -y --force-yes git curl sudo
ENV HOME=/root 
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN mkdir /app
WORKDIR /app
CMD /bin/bash

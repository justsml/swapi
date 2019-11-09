FROM python:2.7.17

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN apt-get update && apt-get dist-upgrade -yq && \
  apt-get install -yq bash python python-setuptools python-pip build-essential imagemagick-6-common install-info gcc-7-base make manpages gnupg gnupg-utils git autoconf automake gettext keychain libmemcached-dev zlib1g-dev

RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# CMD [ "make", "serve" ]
CMD python manage.py runserver -v 2 "0.0.0.0:${PORT}"

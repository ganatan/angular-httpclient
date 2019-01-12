FROM busybox

ADD index.html /www/index.html

EXPOSE 4000

CMD httpd -p 4000 -h /www; tail -f /dev/null

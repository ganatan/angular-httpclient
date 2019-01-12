# proxy
07/04/18 15:50

# Créer 
- un répertoire static-html-directory
- un fichier index.html

# Créer un dockerfile
FROM nginx
COPY static-html-directory /usr/share/nginx/html

# crée l'image
docker build -t some-content-nginx .

# crée le container
# port 80 expose
docker run --name some-nginx -d some-content-nginx
# port 8080 expose
docker run --name some-nginx -d -p 80:80 some-content-nginx

docker run --name some-nginx -d -p 80:80  --link hello:hello some-content-nginx

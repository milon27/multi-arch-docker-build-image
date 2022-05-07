# how to build mult arch docker image

### how to use docker buildx
```
docker buildx ls

docker buildx create --name mybuildx --platform linux/amd64,linux/arm64,linux/arm
docker buildx use mybuildx
```

### bootsrap our builder

```bash
docker buildx inspect --bootstrap
```

### build using docker buildx
```bash
docker buildx build -t milon27/node-multi-arch . --platform linux/amd64,linux/arm64 --push
or 
npm run bp
```

### remove all <none> image
```
docker images -f 'dangling=true' -q
docker rmi $(docker images -f 'dangling=true' -q)
```


### how to run
- run using docker compose
```
# docker-compose.yml
version: '3'
services:
  node_api:
    container_name: node_api
    image: milon27/node-multi-arch
    ports:
      - 80:2727
```


>> owner:  https://milon27.com
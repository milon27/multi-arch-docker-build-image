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

>> owner:  https://milon27.com
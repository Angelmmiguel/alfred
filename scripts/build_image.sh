
#!/bin/bash -e

# Build the current image
echo "Building the image..."
HASH=$(git log --pretty=format:'%h' -n 1)
IMAGE_NAME=angelrb/alfred
docker build -t $IMAGE_NAME:$HASH .

if [ $? -eq 0 ]; then
  echo "Pushing the image..."
  docker tag $IMAGE_NAME:$HASH $IMAGE_NAME:latest
  docker push $IMAGE_NAME:$HASH
  docker push $IMAGE_NAME:latest
else
  echo "Error building the image. Please review it"
fi

# Docker

# Bookmark
- Official Documentation: [https://docs.docker.com/get-started/docker-concepts/building-images/]
- Official Documentation: [https://docs.docker.com/desktop/dev-environments/]

# Notes From Official Documention
- **Docker**: Separates applications from infrastructure and allows infrastructure management.
- Docker is written in *GoLang*.
- **Docker Desktop**: GUI for managing containers, apps, and images.
- **Docker Extensions**: Third-party tools within Docker Desktop.
- **Docker Desktop `settings.json`**: Configuration file that contains various settings and preferences for Docker Desktop.
- **Docker Desktop Resource Saver Mode**: Reduces CPU and memory usage by automatically stopping the Docker Desktop Linux VM when no containers are running for a while.
- **Docker Hub**: Cloud-based service for storing and sharing Docker container images. Supports public and private repositories, automated builds, and integrates with Docker CLI for managing images.
- **Docker Credential Helper**: Helps to securely manage and store authentication credentials for Docker.
- **Docker Scout**: Helps identify and manage security vulnerabilities in Docker images.
- **`docker build`**: Command used to create Docker images from a `Dockerfile`. The command builds the image in a series of layers.

- **Docker Builder**: Enhances the image building process. The term "builder" can specifically refer to: *BuildKit*, *Docker Buildx*.
  - **BuildKit**: Speeds up and enhances Docker image builds with features like parallel builds and advanced caching.
  - **Docker Buildx**: A Docker CLI plugin that uses *BuildKit* to build images for multiple platforms and adds extra build capabilities.

- **Docker Compose**: Tool for defining and running multi-container Docker applications using a simple YAML file.
- **Docker Content Trust**: Ensures the integrity and authenticity of Docker images by enabling digital signing and verification of images before they are pulled or pushed to Docker registries.
- **CVE (Common Vulnerabilities and Exposures)**: Refers to disclosed security vulnerabilities in software that could affect Docker images or containers.
- Docker uses WSL on Windows as an underlying Linux.
- **Docker Objects**: Images, containers, networks, volumes, plugins, etc.
- **Namespaces**: Docker uses Linux namespaces to create isolated workspaces for containers. When a container runs, Docker sets up a set of namespaces that virtualize and isolate system resources, ensuring each container operates in its own separate environment.

- **Docker Engine**: Core component of Docker that enables containerization. It’s a client-server application with three main parts:
  1. **Docker Daemon (`dockerd`)**: Background service responsible for managing Docker containers by listening Docker API requests. It manages Docker objects.
  2. **Docker CLI (Client)**: Command-line tool (`docker`) used to interact with Docker Daemon. It allows users to run commands to build, run, and manage containers. It communicates with deamon using a REST API, over UNIX sockets or a network interface. Another Docker client is *Docker Compose*.
  3. **Docker API**: Allows applications and services to interact with Docker Daemon programmatically.

- **Port Mapping (Port Forwarding)**: Directs network traffic from one port to another to enable external access to private network resources. It works by:
  - Using a private network with devices having private IP addresses.
  - Configuring a router/firewall to connect the private network to the public internet.
  - (Port Mapping) Setting up the router to forward requests from a public port to an internal port.
  - Allowing external requests to reach the correct device through the mapped port.

- **Docker Image**
  - A static, read-only blueprint that includes code, runtime, libraries, and dependencies to run an application. Created using a `Dockerfile`. It consists of stacked layers representing changes or additions. Each instruction in a `Dockerfile` creates a layer in the image. Reuses common layers to reduce redundancy and save storage. Docker caches the layers to speed up builds. A Docker image can include the followings:
    - **Base Operating Systems**
    - **System Libraries and Dependencies**
    - **Application Code**: The actual code or binaries.
    - **Configuration Files**
    - **Runtime Environments**: Interpreters, compilers, or specific runtime environments.
    - **Metadata**: Environment variables, default commands, and exposed ports.
    - **Scripts**
    - **Filesystem Layers**: Directories, files, and the overall filesystem layout.
    - **Volumes**
    - **Networking Configurations**

- **Tag**: A label for identifying and differentiating Docker images, often indicating versions or variants (e.g., `myimage:latest`).
- **Container**: A runnable instance of an image, isolated from other containers and the host machine. It can connect to networks, attach storage, and create new images based on its state, using the host machine’s network connection for external access.

- **Docker Desktop Integrated Terminal**
  - Using the integrated terminal in Docker Desktop containers (*Exec* tab) is same as running one of the following commands:
    - `docker exec -it <container-id> /bin/sh`
    - `docker exec -it <container-id> cmd.exe` (when accessing Windows containers)
    - `docker debug <container-id>` (when using debug mode)
  - When not in debug mode, Docker automatically uses the default user specified in the image's Dockerfile; if none is specified or in debug mode, it defaults to root.

- To remove an image, you must first remove the associated container. The same goes for volumes.
- An image becomes dangling when a new version with the same tag is built, meaning it is no longer tagged or referenced by any containers.

- **Typical Workflow**
  1. **Write Dockerfile**
  2. **Build Image**: Create an image from the Dockerfile.
  3. **Run Container**: Start a container from the image.
  4. **Manage Volumes**

## CLI Codes
- **`docker run -d -p 8080:80 docker/welcome-to-docker`**
  - **`docker run`**: Create and start a new Docker container.
  - **`-d` (Detached Mode)**: The container will run in the background and you won't see its logs in your terminal.
  - **`-p 8080:80`**: Maps port 80 inside the container to port 8080 on the host machine. 
  - **`docker/welcome-to-docker`**: Name of the Docker image.

- **`docker compose watch`**: It monitors changes in your Docker Compose project and automatically rebuilds and restarts services when changes are detected.

- **`docker tag <image_name> <image_name>:<version_number>`**: Tags the Docker image.

- **General Commands**
  - **`docker --version`**
  - **`docker info`**: Provides system-wide information about Docker.
  - **`docker help`**

- **Image Commands**
  - **`docker build -t <image_name> .`**: Builds an image from a Dockerfile in the current directory. The dot (`.`) tells Docker where to find the `Dockerfile`.
  - **`docker image ls`or`docker images`**: Lists all images on your local system.
  - **`docker rmi <image_name>`**: Removes an image from your local system.
  - **`docker pull <image_name>`**
  - **`docker push <image_name>`**
  - **`docker search <image_name>`**
  - **`docker image history <image_name>`**: List the image's layers.

- **Container Commands**
  - **`docker run -d --name <container_name> <image_name>`**: Runs a container in detached mode.
  - **`docker ps`**: Lists all running containers.
    - **`docker ps -a`**: Lists all containers.
  - **`docker stop <container_name>`**: Stops a running container.
  - **`docker rm <container_name>`**: Removes a stopped container.
  - **`docker exec -it <container_name> sh`**: Opens a shell inside a running container.

- **Volume Commands**
  - **`docker volume create <volume_name>`**
  - **`docker volume ls`**
  - **`docker volume rm <volume_name>`**: Removes a volume.

- **Networked Commands**
  - **`docker network create <network_name>`**
  - **`docker network ls`**
  - **`docker network rm <network_name>`**

## Flags
- **`docker run` Flags**
  - **`-d`**: Runs the container in detached mode (in the background).
  - **`-p`**: Publishes a container’s port(s) to the host.
  - **`--name`**: Assigns a name to the container.
  - **`-e`**: Sets environment variables.
  - **`-v`**: Binds mount a volume.
  - **`--rm`**: Automatically removes the container when it exits.
  - **`-i`**t: Allocates a pseudo-TTY and keeps STDIN open (interactive mode).

- **`docker build` Flags**
  - **`-t`**: Tags the image with a name.
  - **`--no-cache`**: Builds the image without using the cache.
  - **`-f`**: Specifies the Dockerfile to use.

- **`docker ps` Flags**
  - **`-a`**: Shows all containers (default shows just running).
  - **`-q`**: Only displays container IDs.
  - **`--filter`**: Filters output based on conditions provided.

- **`docker logs` Flags**
  - **`-f`**: Follows log output.
  - **`--tail`**: Shows the last N lines of logs.

- **`docker-compose` Flags**
  - **`-f`**: Specifies an alternate compose file.
  - **`-p`**: Sets the project name.
  - **`--build`**: Forces rebuild of images.

## Miscellaneous
- **Jeager**: It is an open-source distributed tracing system that monitors and troubleshoots microservices by tracking and visualizing request flows, helping diagnose performance issues and system behavior.

# Unordered Notes
- **Multi-Stage Builds**
- **Images**: A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.
- **Docker Trusted Content**
- **Registry**: An image registry is a centralized location for storing and sharing your container images. It can be either public or private. Docker Hub is a public registry that anyone can use and is the default registry. There are many other available container registries available today, including Amazon Elastic Container Registry(ECR), Azure Container Registry (ACR), and Google Container Registry (GCR).
- **Registry vs. Repository**: A registry is a centralized location that stores and manages container images, whereas a repository is a collection of related container images within a registry. In short, a registry can contain multiple repositories. And a repository can contain images.
- One best practice for containers is that each container should do one thing.

- **Docker Compose**
  - If you need multiple apps to run and communicate with each other you can use docker compose.
  - With Docker Compose, you can define all of your containers and their configurations in a single YAML file.
  - If you make a change, run `docker compose up` again and Compose will reconcile the changes in your file and apply them intelligently.
  - **Dockerfile vs. Compose File**: A Dockerfile provides instructions to build a container image while a Compose file defines your running containers.
  - **`docker compose up -d --build`**
  - **`docker compose down`**: By default, volumes aren't automatically removed when you tear down. If you do want to remove the volumes, add the --volumes flag: `docker compose down --volumes`.
  - If you remove the containers for a Compose app in the GUI, it's removing only the containers. You'll have to manually remove the network and volumes if you want to do so.
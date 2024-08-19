# Docker
# Notes From Official Documents
+ Separates applications from infrastructure and allows infrastructure management.
+ **Docker Desktop**: GUI for managing containers, apps, and images.
+ **Docker Hub**: It is a cloud-based service for storing and sharing Docker container images. It supports public and private repositories, automated builds, and integrates with Docker CLI for managing images.
+ **Container**: A running instance of a Docker image, providing a lightweight, isolated environment for applications. Key aspects:
  - **Isolation**: Containers separate applications and manage dependencies independently.
  - **Portability**: They run consistently across different environments, regardless of the underlying OS.
  - **Efficiency**: Share the host OS kernel but have their own filesystem, making them faster and more lightweight than VMs.
  - **Scalability**: Easily scaled up or down to handle varying loads.

+ **Image**: A static, read-only blueprint with everything needed to run an application, including code, runtime, libraries, and dependencies.
  - Key points:
    + **Read-Only**: Images are immutable; changes are made in separate layers.
    + **Layers**: Docker images use stacked layers to represent changes or additions, enhancing efficiency through:
      - **Layered Architecture**: Each layer adds specific components, such as libraries or application files, to build the final image.
      - **Efficient Storage**: Common layers are reused across images, reducing redundancy and saving storage.
      - **Layer Caching**: Docker caches unchanged layers to speed up builds.
      - **Reuse and Consistency**: Common layers across different images (e.g., base operating systems) can be reused.
    + **Versioning**: Tagged for version control, e.g., `myapp:latest`.
    + **Portability**: Can be shared and run on any Docker-enabled system.
    + **Creation**: Built using a `Dockerfile` that defines the image’s configuration and setup.
  - A Docker image can include the followings:
    + **Base Operating Systems**: Minimal operating system or runtime environment.
    + **System Libraries and Dependencies**
    + **Application Code**: The actual code or binaries of the application being packaged.
    + **Configuration Files**
    + **Runtime Environments**: Includes interpreters, compilers, or specific runtime environments.
    + **Metadata**: Instructions for container execution, such as environment variables, default commands, and exposed ports.
    + **Scripts**: Initialization scripts, startup scripts, or entrypoint scripts used to prepare the application environment or run the application.
    + **Filesystem Layers**: Directories, files, and the overall filesystem layout.
    + **Volumes**
    + **Networking Configurations**

+ **Port Mapping (Port Forwarding)**: Directs network traffic from one port to another to enable external access to private network resources. It works by:
  - Using a private network with devices having private IP addresses.
  - Configuring a router/firewall to connect the private network to the public internet.
  - (Port Mapping) Setting up the router to forward requests from a public port to an internal port.
  - Allowing external requests to reach the correct device through the mapped port.

+ **Docker Engine**: It is the core component of Docker that enables containerization. It’s a client-server application with three main parts:
  1. **Docker Daemon (`dockerd`)**: The background service responsible for managing Docker containers. It handles container creation, execution, and monitoring.
  2. **Docker CLI**: The command-line tool (`docker`) used to interact with Docker Daemon. It allows users to run commands to build, run, and manage containers.
  3. **Docker API**: The API that allows applications and services to interact with Docker Daemon programmatically.

+ **Docker Scout**: It helps identify and manage security vulnerabilities in Docker images.
+ **Docker Build**: Command used to create Docker images from a Dockerfile. The command builds the image in a series of layers.
+ **Docker Extensions**: Let you use third-party tools within Docker Desktop to extend its functionality.
+ **Docker Compose**: It is a tool for defining and running multi-container Docker applications using a simple YAML file.
+ **Docker Content Trust**: It is a security feature that ensures the integrity and authenticity of Docker images by enabling digital signing and verification of images before they are pulled or pushed to Docker registries.
+ **CVE (Common Vulnerabilities and Exposures)**: Refers to a publicly disclosed security vulnerability in software that could affect Docker images or containers.
+ **Docker Desktop Integrated Terminal**
  - Using the integrated terminal in Docker Desktop containers (*Exec* tab) is same as running one of the following commands:
    + `docker exec -it <container-id> /bin/sh`
    + `docker exec -it <container-id> cmd.exe` (when accessing Windows containers)
    + `docker debug <container-id>` (when using debug mode)
  - When not in debug mode, Docker automatically uses the default user specified in the image's Dockerfile; if none is specified or in debug mode, it defaults to root.

+ To remove an image, you must first remove the associated container.
+ An image becomes dangling when a new version with the same tag is built, meaning it is no longer tagged or referenced by any containers.
+ **Tag**: A tag is a label used to identify and differentiate Docker images, often indicating version numbers or variants (e.g., myimage:latest).
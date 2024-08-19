# Docker
# Notes From Official Documents
+ Separates applications from infrastructure and allows infrastructure management.
+ **Docker Desktop**: GUI for managing containers, apps, and images.
+ **Docker Hub**: Docker Hub is a cloud-based service for storing and sharing Docker container images. It supports public and private repositories, automated builds, and integrates with Docker CLI for managing images. It also offers image search, version control, security scanning, and team collaboration.
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
+ **Docker Extensions**
+ **Docker Compose**
+ **Docker Content Trust**
# Kubernetes
# Unordered Notes
- **Kubernetes (K8s)**: It is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications.

## Install Tools
- **`kubectl`**: The Kubernetes command-line tool, `kubectl`, allows you to run commands against Kubernetes clusters. You can use `kubectl` to deploy applications, inspect and manage cluster resources, and view logs. Can be used with any Kubernetes cluster, whether local or remote.
- **`kind`**: Tool to run Kubernetes clusters locally using Docker or Podman containers. Creates lightweight Kubernetes clusters in Docker containers for testing and development. Ideal for CI/CD pipelines or local development with multiple clusters or isolated environments.
- **`minikube`**: Tool to run a single-node or multi-node Kubernetes cluster locally on your computer. Provides a complete, single-node Kubernetes cluster in a VM or container on your local machine. Best for development and testing; provides a more "full-featured" local Kubernetes environment compared to kind.
- **`kubeadm`**: Tool to initialize and manage Kubernetes clusters. Helps set up Kubernetes clusters, from creating the *control plane* and *worker nodes* to joining them into a cluster. Suitable for both local and production environments.

- **Cluster**
  - A set of nodes that work together to run containerized applications.

  - **Main Components**
    - **Nodes**
      - A node is a physical or virtual machine within a Kubernetes cluster. It's types:
        - **Master Node (Control Plane Node)**
          - Manages the cluster’s overall health and operation, ensuring configurations are met.
          - **Components**:
            - **API Server**: Handles API requests and communication between components and users.
            - **Controller Manager**: Monitors cluster state and makes adjustments to maintain the desired state.
            - **Scheduler**: Assigns pods to nodes based on resource availability and requirements.
            - **etcd**: A distributed key-value store for cluster data and state information.

        - **Worker Node (Compute Node)**
          - Runs applications and workloads.
          - **Components**:
            - **Kubelet**: Ensures containers are running in pods as specified by the control plane.
            - **Kube Proxy**: Manages network routing and load balancing within the cluster.
            - **Container Runtime**: Software that executes and manages containerized applications (e.g., Docker, containerd).
    
    - **Pods**: The smallest deployable units in Kubernetes, containing one or more containers.
    - **Services**: Facilitate communication between pods and with the external world, providing load balancing and stable endpoints.
    - **Deployments, ReplicaSets, and Other Controllers**: Oversee application deployment and scaling.

## Concepts
### Overview
- **What Kubernetes Offers**
  - In production, managing containers and avoiding downtime is crucial. Kubernetes offers a resilient framework for running distributed systems, handling scaling, failover, and deployment patterns effectively.

  - Kubernetes provides you:
    - **Service Discovery and Load Balancing**: Exposes containers via DNS or IP. Balances traffic and maintains stability.
    - **Storage Orchestration**: Automatically mounts storage systems (local, cloud, etc.).
    - **Automated Rollouts and Rollbacks**: Controls updates by managing container creation and removal.
    - **Automatic Bin Packing**: Optimizes resource use by scheduling containers based on CPU and memory needs.
    - **Self-Healing**: Restarts and replaces failing containers; ensures containers are ready before advertising.
    - **Secret and Configuration Management**: Securely manages sensitive data and configuration without rebuilding images.
    - **Batch Eexecution**: Manages batch and CI workloads, including automatic container replacement.
    - **Horizontal Scaling**: Scales applications up/down via command, UI, or automatically based on CPU usage.
    - **IPv4/IPv6 Dual-Stack**: Supports allocation of both IPv4 and IPv6 addresses to Pods and Services.
    - **Extensible**: Allows feature additions without altering upstream code.

### Objects In Kubernetes
- **Kubernetes Objects**
  - Represent the state of your cluster and include details such as:
    - What containerized applications are running and on which nodes.
    - Available resources for those applications.
    - Policies for application behavior, including restart, upgrades, and fault tolerance.

  - Creating an object sets the desired state for your cluster, and Kubernetes works to maintain that state.
  - Use the Kubernetes API to create, modify, or delete objects. Tools like kubectl make API calls for you, but you can also use Client Libraries to interact with the API directly in your own programs.

- **Object Spec and Status**
  - **Object Spec**
    - Defines the desired state of the object when created.
    - Describes the configuration and characteristics you want for the resource.

  - **Object Status**
    - Shows the current state of the object.
    - Updated by the Kubernetes system to reflect the actual state.

  - **How They Work**: Kubernetes actively manages the object's status to match the desired state defined in the spec. For example for a deployment with a spec of three replicas, Kubernetes will start three instances. If one fails, Kubernetes updates the status and starts a replacement to match the spec.

- **Describing a Kubernetes Object**
  - To create a Kubernetes object, define its desired state and basic info in a YAML file called a *manifest*. Use the Kubernetes API or `kubectl` to create the object. `kubectl` converts the YAML manifest to JSON for the API request. JSON is also supported, but YAML is the usual format.

  - To create a Deployment using a manifest file, use the `kubectl apply` command.
    - **Example**: `kubectl apply -f file-name.yaml`

- **Required Fields**
  - In the Kubernetes manifest (YAML or JSON), you must include:
    - **`apiVersion`**: Specifies the Kubernetes API version used.
    - **`kind`**: Indicates the type of object to create.
    - **`metadata`**: Provides unique identifiers for the object, including a name, UID, and optional namespace.
    - **`spec`**: Defines the desired state of the object. The format varies by object type.

- **Server-Side Field Validation**
  - Detects unrecognized or duplicate fields in an object, similar to `kubectl --validate` but on the server side.

  - Validation Levels:
    - **Strict**: Errors if validation fails.
    - **Warn**: Validation errors show as warnings, not failures.
    - **Ignore**: No field validation is performed.

  - **`kubectl` Validation Flag**:
    - **`--validate=true`** (default) is equivalent to strict.
    - **`--validate=false`** is equivalent to ignore.

  - If `kubectl` cannot connect to an API server with field validation, it uses client-side validation.

#### Kubernetes Object Management
> ***NOTE**: A Kubernetes object should be managed using only one technique. Mixing and matching techniques for the same object results in undefined behavior.*

- **Management Techniques**
  - In Kubernetes, `kubectl` commands can be categorized into three types based on how they manage resources and configurations.

  - **Imperative Commands**
    - **What It Does**: Directly manages live Kubernetes objects.
    - **How It Works**: Commands are executed immediately on the live state of the cluster.
    - **Usage Context**: Best suited for quick tasks or development environments where you need to rapidly create or modify resources without a lot of planning or record-keeping.

  - **Imperative Object Configuration**
    - **What It Does**: Manages Kubernetes objects using configuration files that define the desired state of the objects.
    - **How It Works**: You provide a file (or multiple files) to kubectl which describes the object configuration. The kubectl command then applies these configurations directly to the cluster.
    - **Usage Context**: Suitable for both development and production environments where you want to work with configuration files but still manually specify the operations.

  - **Declarative Object Configuration**
    - What It Does: Manages Kubernetes objects by maintaining configuration files and letting kubectl handle the creation, updating, and deletion of resources based on these files.
    - How It Works: You define the desired state in files stored locally. The kubectl commands detect differences between the desired state and the live state, and apply necessary changes.
    - Usage Context: Ideal for production environments or larger projects where you want to ensure that the cluster state is always in sync with your configuration files.
# Kubernetes
# Unordered Notes
- It is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications.

## Install Tools
- **`kubectl`**: The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.
- **`kind`**: It lets you run Kubernetes on your local computer. This tool requires that you have either Docker or Podman installed.
- **`minikube`**: Like `kind`, `minikube` is a tool that lets you run Kubernetes locally. minikube runs an all-in-one or a multi-node local Kubernetes cluster on your personal computer
- **`kubeadm`**: You can use the kubeadm tool to create and manage Kubernetes clusters. It performs the actions necessary to get a minimum viable, secure cluster up and running in a user friendly way.

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
  - **Kubernetes Control Plane**

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
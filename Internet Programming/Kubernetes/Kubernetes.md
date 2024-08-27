# Kubernetes

# Bookmark
- Official Documentation: [https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/]

# Notes From Official Documentation

# Unordered Notes From Official Documentation
- **Kubernetes (K8s)**: Container orchestration engine for automating deployment, scaling, and management of containerized applications.

## Install Tools
- **`kubectl`**: Kubernetes command-line tool for deploying applications, managing resources, and viewing logs in clusters.
- **`kind`**: Tool for running lightweight Kubernetes clusters locally using Docker or Podman containers. Ideal for testing, development, and CI/CD pipelines with multiple or isolated environments.
- **`minikube`**: Tool for running a single-node or multi-node Kubernetes cluster locally in a VM or container. Offers a complete local Kubernetes environment, ideal for development and testing, and more feature-rich than `kind`.
- **`kubeadm`**: Tool for initializing and managing Kubernetes clusters, including setting up *control planes* and *worker nodes*. Suitable for both local and production environments.

- **Cluster**: A set of nodes that work together to run containerized applications. It's components:
  - **Nodes**: A node is a physical or virtual machine within a Kubernetes cluster. Nodes are of two main types:
    1. **Master Node (Control Plane Node)**: Manages the cluster’s overall health and operation, ensuring configurations are met. It's components:
      - **API Server**: Handles API requests and communication between components and users.
      - **Controller Manager**: Monitors cluster state and makes adjustments to maintain the desired state.
      - **Scheduler**: Assigns pods to nodes based on resource availability and requirements.
      - **etcd**: A distributed key-value store for cluster data and state information.

    2. **Worker Node (Compute Node)**: Runs applications and workloads (pods). It's components:
      - **Kubelet**: Ensures containers are running in pods as specified by the control plane.
      - **Kube Proxy**: Manages network routing and load balancing within the cluster.
      - **Container Runtime**: Software that executes and manages containerized applications (e.g., Docker, containerd, CRI-O).

  - **Kubernetes Objects**: These components are deployed on worker nodes. Master nodes do not run application workloads directly but manage the scheduling and orchestration of these components across the worker nodes.
    - **Pods**: The smallest deployable units in Kubernetes, containing one or more containers.
    - **Services**: Facilitate communication between pods and with the external world, providing load balancing and stable endpoints.
    - **Deployments**: Manage the deployment and scaling of a set of pods. They ensure that a specified number of pod replicas are running and handle rolling updates.
    - **ReplicaSets**: Ensure that a specified number of pod replicas are running at any given time. Deployments typically manage ReplicaSets.
    - **Other Controllers**: Oversees application deployment and scaling, including StatefulSets, DaemonSets, and Jobs.

- **Load Balancing**: Refers to distributing network or application traffic across multiple instances of a service to ensure that no single instance becomes a bottleneck.Main aspects of load balancing in Kubernetes:
  - **Algorithms**: Kubernetes typically uses round-robin by default, but can be configured for other methods.
  - **Scaling**: Works in conjunction with *Horizontal Pod Autoscaler (HPA)* to adjust the number of pods based on load.

  - **Types**
    - **Cluster IP**: Provide internal load balancing within the Kubernetes cluster by distributing traffic among pods that match the service's selector.
    - **NodePort**: Services expose a service on a static port on each node's IP address, allowing external traffic to be routed to the service while still balancing the load across pods.
    - **LoadBalancer**: Available in cloud environments, provision an external load balancer managed by the cloud provider to distribute incoming traffic to the service. (like AWS ELB or Google Cloud Load Balancer).

- **Container Runtime Interface (CRI)**: A standard interface for Kubernetes to manage containers through various runtimes (e.g., Docker, containerd, CRI-O) without being tied to any specific one.
  - **Abstraction Layer**: CRI abstracts Kubernetes from the specifics of different container runtimes, allowing it to use multiple runtimes via a unified interface.
  - **CRI Components**
    - **RuntimeService**: Handles container lifecycle operations like creating, starting, stopping, and deleting containers.
    - **ImageService**: Manages container images, including pulling images from a registry, listing images, and removing images.

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
  - Use the Kubernetes API to create, modify, or delete objects. Tools like `kubectl` make API calls for you, but you can also use Client Libraries to interact with the API directly in your own programs.

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

  - **Validation Levels**
    1. **Strict**: Errors if validation fails.
    2. **Warn**: Validation errors show as warnings, not failures.
    3. **Ignore**: No field validation is performed.

  - **`kubectl` Validation Flag**
    - **`--validate=true`** (default) is equivalent to strict.
    - **`--validate=false`** is equivalent to ignore.

  - If `kubectl` cannot connect to an API server with field validation, it uses client-side validation.

#### Kubernetes Object Management
- **Management Techniques**
  - In Kubernetes, `kubectl` commands can be categorized into three types based on how they manage resources and configurations.

  1. **Imperative Commands**: Executed directly on the live state of the Kubernetes cluster for immediate changes (e.g., creating, updating, or deleting resources).
    - **Management Technique**: Operates on live objects.
    - **Recommended Environment**: Development projects.

  2. **Imperative Object Configuration**: Manages resources using individual configuration files with imperative commands to apply changes.
    - **Management Technique**: Operates on individual files.
    - **Recommended Environment**: Production projects.

  3. **Declarative Object Configuration**: Manages resources through directories of configuration files, where Kubernetes maintains the desired state.
    - **Management Technique**: Operates on directories of files.
    - **Recommended Environment**: Production projects.

> ***NOTE**: A Kubernetes object should be managed using only one technique. Mixing and matching techniques for the same object results in undefined behavior.*

#### Object Names and IDs
- **Names**
  - A name in a resource URL (e.g., `/api/v1/pods/<some-name>`) must be unique within the scope of its resource kind at any given time, ensuring that each object in the cluster has a unique name for that type of resource.
  - If a physical entity like a Node is re-created with the same name without deleting the old one, Kubernetes may treat it as the same entity, potentially causing inconsistencies.

- **UIDs**
  - Every Kubernetes object has a *UID* that is unique across your whole cluster.
  - Kubernetes UIDs are universally unique identifiers (UUIDs).

#### Label and Selectors
- **Labels**
  - Labels are key/value pairs that are attached to objects.
  - Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system.
  - Each object can have a set of key/value labels defined. Each Key must be unique for a given object.
  - Labels allow for efficient queries and watches.
  - Labels enable users to map their own organizational structures onto system objects in a loosely coupled fashion.
  - **Example**:
    ```yaml
    "metadata": {
      "labels": {
        "key1" : "value1",
        "key2" : "value2"
      }
    }
    ```

  - **Syntax and Character Set**
    - Valid label keys have two segments: an optional prefix and name, separated by a slash (`/`). If specified, the prefix must be a DNS subdomain.
    - If the prefix is omitted, the label Key is presumed to be private to the user.
    - Automated system components (e.g. `kube-scheduler`, `kube-controller-manager`, `kube-apiserver`, `kubectl`, or other third-party automation) which add labels to end-user objects must specify a prefix.
    - The `kubernetes.io/` and `k8s.io/` prefixes are reserved for Kubernetes core components.

  - **Label Selectors**
    - Unlike names and UIDs, labels do not provide uniqueness.
    - There are two types of selectors: *equality-based* and *set-based*. A label selector can be made of multiple *requirements* which are comma-separated.
      - **Equality-Based Requirement**: Equality- or inequality-based requirements allow filtering by label keys and values. Three kinds of operators are admitted `=`,`==`,`!=`. The first two represent equality. For example: `environment = production` and `tier != frontend`. You can combine the both using comma: `environment=production,tier!=frontend`.
      - **Set-Based Requirement**: Allow filtering keys according to a set of values. Three kinds of operators are supported: `in`, `notin` and `exists` (only the key identifier). For example: `environment in (production, qa)` (key equal to `environment` and value equal to `production` or `qa`). You can combine them with comma: `environment in (production, qa), tier notin (frontend, backend)`.

      > ***NOTE**: Both equality-based requirements and set-based requirements can be combined with comma: `partition in (customerA, customerB),environment!=qa`.*

#### Namespaces
- A namespace is a logical partition within a physical Kubernetes cluster. It helps to organize and isolate resources such as Pods, Services, Deployments, and other Kubernetes objects. Each resource name must be unique within its own namespace, but names can be duplicated across different namespaces.
- Namespaces are intended for use in environments with many users spread across multiple teams, or projects. Namespaces are a way to divide cluster resources between multiple users (via *resource quota*).
- Namespaces cannot be nested inside one another and each Kubernetes resource can only be in one namespace.

- **Initial Namespaces**
  1. **`default`**: Kubernetes includes this namespace so that you can start using your new cluster without first creating a namespace.
  2. **`kube-node-lease`**: This namespace holds *Lease* objects associated with each node. Node leases allow the kubelet to send *heartbeats* so that the control plane can detect node failure.
  3. **`kube-public`**: This namespace is readable by all clients (including those not authenticated).
  4. **`kube-system`**: The namespace for objects created by the Kubernetes system.

  > ***NOTE**: Avoid creating namespaces with the prefix `kube-`, since it is reserved for Kubernetes system namespaces.*

- You can permanently save the namespace for all subsequent kubectl commands in that context.
  - **Example**:
    ```yaml
    kubectl config set-context --current --namespace=<insert-namespace-name-here>
    # Validate it
    kubectl config view --minify | grep namespace:
    ```
    - **`--minify`**: Filters the output to show only the details related to the current context.
    - **`grep namespace:`**: Searches the output for the line containing the namespace: key, which shows the default namespace for the current context.

- **Namespaces and DNS**: When you create a *Service*, it creates a corresponding *DNS entry*. This entry is of the form `<service-name>.<namespace-name>.svc.cluster.local` (FQDN), which means that if a container only uses `<service-name>`, it will resolve to the service which is local to a namespace (means that the service is only accessible within that specific namespace).

- **Automatic Labeling**: The Kubernetes control plane sets an immutable label kubernetes.`io/metadata.name` on all namespaces. The value of the label is the namespace name.

#### Annotations
- You can use Kubernetes annotations to attach arbitrary non-identifying metadata to objects.
- Labels can be used to select objects and to find collections of objects that satisfy certain conditions. In contrast, annotations are not used to identify and select objects.
- **Example**:
  ```yaml
  "metadata": {
    "annotations": {
      "key1" : "value1",
      "key2" : "value2"
    }
  }
  ```

- Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). If specified, the prefix must be a DNS subdomain.
- If the prefix is omitted, the annotation Key is presumed to be private to the user.
- Automated system components (e.g. `kube-scheduler`, `kube-controller-manager`, `kube-apiserver`, `kubectl`, or other third-party automation) which add annotations to end-user objects must specify a prefix.
- The `kubernetes.io/` and `k8s.io/` prefixes are reserved for Kubernetes core components.

#### Field Selectors
- Let you select Kubernetes objects based on the value of one or more resource fields.
- **Example**: `metadata.name=my-service`

> ***NOTE**: Field selectors are essentially resource filters.*

- **Supported Fields**
  - Supported field selectors vary by Kubernetes resource type. All resource types support the `metadata.name` and `metadata.namespace` fields.
  - There are extensive list of supported fields list in offical documentations. Check it for more information.

- **Supported Operators**
  - You can use the `=`, `==`, and `!=` operators with field selectors (`=` and `==` mean the same thing).
  - *Set-based operators* are not supported for field selectors.
  - You can use comma to chaining the selectors like labels.

- **Multiple Resource Types**: You can use field selectors across multiple resource types.
  - **Example**: `kubectl get statefulsets,services --all-namespaces --field-selector metadata.namespace!=default`

#### Finalizers
- Finalizers are namespaced keys that instruct Kubernetes to delay resource deletion until certain conditions are met. They notify *controllers* to clean up resources owned by the object marked for deletion.
- When you request the deletion of an object with finalizers, Kubernetes sets the `.metadata.deletionTimestamp` and returns a 202 status code. The object remains in a terminating state while finalizers perform their actions. Once the finalizers are removed and the `metadata.finalizers` field is empty, Kubernetes completes the deletion.
- You can use finalizers to control garbage collection of resources.
- Finalizers are usually lists of keys, similar to annotations, and do not contain executable code. Kubernetes automatically includes some finalizers, but you can also define custom ones.
- When you create a resource using a manifest file, you can specify finalizers in the `metadata.finalizers` field.
- **Example**: The `kubernetes.io/pv-protection` finalizer prevents accidental deletion of `PersistentVolumes`. While a Pod uses the volume, the finalizer keeps it from being deleted. Once the Pod stops using the volume, Kubernetes removes the finalizer, allowing the PersistentVolume to be deleted.
- Once you request the deletion of an object, the object remains in a "Terminating" state until certain conditions are met or finalizers are processed. During this time, you cannot restore or recover the object. If you need a similar object after the deletion request, you'll need to create a new one.

- **Owner References, Labels, and Finalizers**
  - In Kubernetes, labels and owner references both describe relationships between objects but serve different roles.
  - **Labels** are used by controllers to track and manage groups of related objects, like Pods created by a Job. The Job controller adds labels to Pods and monitors changes to them based on these labels.
  - **Owner references** link these Pods back to the Job that created them. If you delete the Job, Kubernetes uses owner references to decide which Pods to clean up.
  - **Finalizers** are used to perform cleanup tasks before deleting an object. They can sometimes prevent objects from being deleted immediately. If an object isn’t deleted as expected, check both finalizers and owner references to troubleshoot the issue.

#### Owners and Dependents
- In Kubernetes, some objects own other objects. For example, a ReplicaSet owns a group of Pods, making those Pods its *dependents*.
- A Service uses labels to determine which EndpointSlices it should work with. Each EndpointSlice includes an owner reference that links it back to the Service, making it a dependent object. This ensures proper management and prevents interference from other parts of the system.
- Dependent objects have a `metadata.ownerReferences` field, which includes the object name and UID within the same namespace. Kubernetes sets this field automatically, but you can also configure it manually.
- The `ownerReferences.blockOwnerDeletion` field, set to true or false, controls whether dependents can block their owner from being deleted. Kubernetes sets this field to true automatically when a controller sets `metadata.ownerReferences`, but you can also configure it manually.
- The Kubernetes admission controller manages access to the `ownerReferences` field based on the owner's delete permissions, preventing unauthorized users from delaying the deletion of the owner object.
- **Foreground Finalizer**: Ensures that the owner isn’t deleted until dependents are removed.
- **Foreground Cascading Deletion**: Waits for dependents to be deleted before removing the owner.
- **Orphan Deletion Policy**: Dictates whether dependents are kept or deleted when their owner is removed.
- **Orphan Cascading Deletion**: Leaves dependents in the cluster when the owner is deleted.

#### Recommended Labels
# Terraform

# Bookmark
- Official Documentation: [https://developer.hashicorp.com/terraform/docs]
  - [https://developer.hashicorp.com/terraform/cloud-docs]
  - Some documents can be reachable within another documents at the moment. If this is the case, look each one in documents. For example: "state file" in "What is Terraform?" document.

# Notes From Official Documentation

# Unordered Notes From Official Documentation
- **Terraform**: *Infrastructure as code* tool that enables defining cloud and on-prem resources using human-readable configuration files, which can be versioned, reused, and shared. It manages both low-level components (compute, storage, networking) and high-level features (DNS, SaaS).
- **On-Premise**: Hardware or infrastructure that is physically located within the organization's own facilities, rather than being hosted in the cloud or by a third-party service provider.
- **Provider**: A provider is a plugin that lets Terraform interact with specific platforms or services by defining the necessary API interactions to manage resources.
- **Terraform Registry**: Repository of Terraform modules and providers.

- Core Terraform workflow:
  1. **Write**: Define infrastructure in configuration files.
  2. **Plan**: Review the changes Terraform will make to your infrastructure.
  3. **Apply**: Terraform provisions your infrastructure and updates the state file.

- Terraform uses an immutable approach, replacing old resources with new ones rather than modifying them. This reduces configuration drift and side effects, ensures consistency, simplifies upgrades, and makes rollbacks easier.
- Terraform tracks your infrastructure with a state file, which serves as the source of truth, helping Terraform determine the necessary changes to align with your configuration.
- Terraform configuration files are declarative, specifying the desired end state of your infrastructure.
- Terraform automatically manages dependencies and provisions resources efficiently by building a resource graph and handling operations in parallel.
- Terraform supports reusable modules that define configurable infrastructure collections. You can use modules from the Terraform Registry or create your own.
- **Self-Service Clusters**: Resources users can control on their own through a web interface or API. In Terraform, this lets users set up and manage their own resources with little help from IT.
- **Ticketing Systems**: Tools that handle IT requests and issues, automate tasks, and track changes. In Terraform, they help manage and record infrastructure updates and deployment requests.
- **Sentinel**: A *policy-as-code* framework for Terraform that enforces rules and compliance requirements on infrastructure changes. It allows you to create policies to validate Terraform plans and configurations, helping ensure adherence to security and operational standards.
- **Software-Defined Networking (SDN)**: A network architecture that separates *decision-making (control plane)* from *data forwarding (data plane)*. This separation enables centralized, software-based control, making network management and adaptation easier.

- **Terraform Language**: Terraform language used to declare and manage infrastructure objects. Other features just help make defining these resources easier and more flexible.
  - **Syntax**:
    ```terraform
    resource "aws_vpc" "main" {
      cidr_block = var.base_cidr_block
    }
  
    <BLOCK TYPE> "<BLOCK LABEL>" "<BLOCK LABEL>" {
      # Block body
      <IDENTIFIER> = <EXPRESSION> # Argument
    }
    ```
    - **Blocks**: Containers that configure objects like resources. They have a block type, optional labels, and a body with arguments and nested blocks. Most Terraform features use top-level blocks.
    - **Arguments**:Assign values to names within blocks.
    - **Expressions**: Represent a value, either literally or by referencing and combining other values. They appear as values for arguments, or within other expressions.
    - The ordering of blocks and the files they are organized into are generally not significant; Terraform only considers implicit and explicit relationships between resources when determining an order of operations.

- **Cloud Development Kit for Terraform (CDKTF)**: Allows you to use familiar programming languages to define and provision infrastructure.
  - **How Does CDKTF Work?**: CDK for Terraform leverages concepts and libraries from the *AWS Cloud Development Kit* to translate your code into infrastructure configuration files for Terraform.
    - **AWS Cloud Development Kit**: It is a framework for defining cloud infrastructure using familiar programming languages.

  - At a high level, you will:
    1. **Create an Application**: Scaffold a project in your chosen language using a built-in or custom template.
    2. **Define Infrastructure**: Use your language to specify the infrastructure, with CDKTF generating necessary classes from Terraform provider schemas.
    3. **Deploy**: Provision infrastructure using `cdktf` CLI commands or synthesize your code into a JSON configuration file for use with Terraform.

  - **`cdktf constructs`**: It is a package that helps you define reusable infrastructure components in CDKTF. These components, or *constructs*, encapsulate Terraform resources and configuration logic into higher-level abstractions that can be used across different projects or by different teams.

- **What is HCP Terraform?**
---
sidebar_position: 3
title: Privacy
---

When you use our services, you trust us with your personal information. At Quali, we take your privacy very seriously. In this article, we describe our privacy policy, the information we collect, how we use it and what rights you have in relation to it. This includes personal information you voluntarily share with us when registering with Torque, cloud account and authentication details, git repository data, and more.

## Personal information 

* Contact data (First name, last name, email address) 
* Social media login data (Username/email address when registering with a git account)
* Password of non-SSO users

## Confidential information  

* Account data 
    * [SSO](/admin-guide/sso) status (enabled or not) (optional) 
    * Git repositories ([GitHub](/admin-guide/source-control/source-control-github), [GitLab](/admin-guide/source-control/source-control-gitlab), [self-managed](/admin-guide/source-control/Self%20Hosted%20Repositories/overview))
        * User authentication/credentials 
        * [IaC](/overview/supported-platforms#infrastructure-as-code) asset files. For example: Terraform, Helm, Kubernetes manifests. For more details, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets)
    * [Agents](/torque-agent/Install-and-connect-self-hosted-agent) 
    * Role that allows cost information gathering - [AWS](/governance/cost-tracking/configuring-cost-aws), [Azure](/governance/cost-tracking/configuring-cost-azure), [Kubernetes](/governance/cost-tracking/configuring-cost-k8s) (optional)
    * Cloud authentication data for Terraform deployments on [EKS](/torque-agent/service-accounts-for-aws), [AKS](/torque-agent/service-accounts-for-azure), or [GKE](/torque-agent/service-accounts-for-gcp)
    * [Parameters](/admin-guide/params) (optional) 
* Ongoing usage data 
    * Environment history  
        * Cloud resources deployed as part of the environment. See [Launch Your Blueprint](/getting-started/Getting starting with terraform)
        * Events 
    * [Cost](/governance/cost-tracking/cost) information (optional) 
    * [Audit Log events](/governance/audit-log/events)

## What does Torque connect to 

* [Cloud account](/torque-agent/Install-and-connect-self-hosted-agent)
* [Git repositories](/torque-agent/Install-and-connect-self-hosted-agent)

## For our full privacy policy
Please visit our [privacy policy](https://www.quali.com/privacy-policy/) page.

---

## Deployment Options

Choosing the right deployment option is critical for balancing security, compliance, and operational efficiency. Torque offers two deployment models: SaaS with Agent/Runner and Full On-Prem. Below is a detailed comparison to help you make an informed decision.

### Key Considerations

- **Security**: SaaS deployment provides robust security features, including SOC 2 compliance, BYOK, and private endpoints, making it suitable for most organizations, including those with stringent security requirements.
- **Cost and Resources**: SaaS eliminates the need for dedicated infrastructure and maintenance teams, reducing both upfront and ongoing costs.
- **Compliance**: SaaS simplifies compliance with built-in certifications and features, while on-prem deployments require effort to achieve the same level of assurance.
- **Operational Efficiency**: SaaS enables faster deployment, automatic updates, and seamless scaling, allowing your team to focus on core business objectives rather than infrastructure management.

Here’s a comparison of the SaaS with Agent/Runner deployment and Full On-Prem deployment, highlighting key considerations:

| **Aspect**                     | **SaaS with Agent/Runner**                                                                 | **Full On-Prem**                                                                 |
|--------------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Management**                 | **Pro**: No dedicated team required, reducing operational costs.<br />**Con**: Relies on vendor for support and maintenance. | **Pro**: Full control over infrastructure and management.<br />**Con**: Requires a dedicated team, increasing costs. |
| **Upgrades & Bug Fixes**       | **Pro**: Automatic updates ensure the latest features and patches.<br />**Con**: Limited control over update timing. | **Pro**: Control over update schedule.<br />**Con**: Manual updates may lead to delays or missed patches. |
| **Compliance**                 | **Pro**: SOC 2 compliant, simplifying audits.<br />**Con**: Data residency concerns for sensitive data. | **Pro**: Easier to meet strict regulatory requirements.<br />**Con**: Compliance must be managed internally. |
| **Encryption**                 | **Pro**: BYOK (Bring Your Own Keys) enhances data control.<br />**Con**: Some data still resides in the cloud. | **Pro**: Full control over encryption and data.<br />**Con**: BYOK may require custom setup. |
| **Authentication**             | **Pro**: SSO support for seamless integration.<br />**Con**: Dependent on vendor’s SSO implementation. | **Pro**: Fully customizable authentication policies.<br />**Con**: SSO setup requires additional effort. |
| **Network Security**           | **Pro**: VPN/private endpoint support ensures secure access.<br />**Con**: Less network isolation compared to on-prem. | **Pro**: Complete network isolation for maximum security.<br />**Con**: Complex setup and maintenance. |
| **Scalability**                | **Pro**: Easily scales without hardware investment.<br />**Con**: Vendor-imposed limits may apply. | **Pro**: Fully customizable scaling.<br />**Con**: Requires hardware investment and planning. |
| **Dependency**                 | **Con**: Partial reliance on vendor for security and availability. | **Pro**: No third-party dependency.<br />**Con**: All risks and responsibilities lie with the client. |
| **Attack Surface**             | **Con**: Agent could be a vulnerability if not secured. | **Pro**: Minimal external exposure.<br />**Con**: Internal misconfigurations still pose risks. |
| **Cost**                       | **Pro**: Lower upfront and operational costs.<br />**Con**: Ongoing subscription fees. | **Pro**: No recurring vendor fees.<br />**Con**: High upfront infrastructure costs, including the need for a staging environment to test upgrades. |
| **Stability**                  | **Pro**: Vendor-tested updates ensure reliability.<br />**Con**: Dependent on vendor's release cycle. | **Pro**: Full control over updates.<br />**Con**: Requires a staging environment to validate updates before production, increasing complexity. |

### Why SaaS is the Better Choice for Cybersecurity Teams

SaaS with Agent/Runner deployment offers several advantages that directly address the concerns of cybersecurity teams:

1. **Proven Security Standards**: SaaS solutions are SOC 2 compliant, ensuring adherence to industry-standard security practices. This reduces the burden on your internal teams to implement and maintain compliance.
2. **Data Control with BYOK**: Bring Your Own Keys (BYOK) allows you to retain control over encryption keys, ensuring that sensitive data is protected according to your organization's policies.
3. **Reduced Attack Surface**: SaaS deployments leverage private endpoints and VPNs to secure communication between your infrastructure and the SaaS platform. This minimizes exposure to external threats.
4. **Continuous Security Updates**: SaaS providers deliver automatic updates and patches, ensuring that your environment is always protected against the latest vulnerabilities without requiring manual intervention.
5. **Vendor Expertise**: SaaS providers employ dedicated security teams to monitor and respond to threats, offering a level of expertise that may be difficult to replicate in-house.
6. **Scalability Without Risk**: SaaS platforms are designed to scale securely, allowing you to grow your operations without introducing new vulnerabilities or requiring additional hardware investments.

### Addressing Common Concerns

- **Data Residency**: SaaS platforms offer options for data residency and compliance with regional regulations, ensuring that sensitive data remains within the required geographic boundaries.
- **Agent Security**: The Torque Agent is lightweight and designed with security in mind. It operates with minimal permissions and can be deployed in isolated environments to further reduce risk.
- **Incident Response**: SaaS providers maintain 24/7 monitoring and incident response capabilities, ensuring rapid detection and mitigation of potential threats.





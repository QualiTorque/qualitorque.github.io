---
title: Agent OVA Specification
sidebar_label: OVA Specification
description: Customer-facing overview of the software and services included in the Torque Agent OVA.
---

# Torque Agent (OVA): Included Components

This page provides a customer-facing overview of what is included in the Torque Agent OVA.

## Included Out of the Box

The OVA is a preconfigured management appliance that includes the core building blocks required to run Torque environments on customer infrastructure.

### Base Operating System

- Enterprise Linux base image (AlmaLinux 9.7 or Rocky Linux 9.x, depending on the selected template).

### Environment Runtime

- Container runtime and compose tooling used by Torque components during environment operations.

### Registry and Image Distribution

- Built-in private container registry capability for storing and serving container images required for automated environments.

### Network and File Delivery Capabilities

- DNS capability used for environment-level name resolution scenarios.
- HTTP file serving capability used for image/file distribution workflows (for example, ISO hosting).

### Secure Secret Storage

- Encrypted local secrets vault mechanism for storing operational credentials used by the agent flows.

### VMware Integration

- VMware guest tooling required for OVF/guestinfo-based configuration at environment time.

### Lifecycle and Maintenance

- Built-in first-boot configuration flow.
- Built-in update mechanism for post-environment improvements and maintenance tasks.

## Installed Services

The table below lists the primary system services that are part of the Torque Agent footprint.

| Service name (systemd) | Included in base image | Enabled at boot | Typical start phase | Customer-facing role |
| --- | --- | --- | --- | --- |
| sshd | Yes | Yes | Base OS runtime | Administrative access |
| vmtoolsd | Yes | Yes | Image build/install | VMware guest integration |
| torque_service | Yes | Yes | First boot runtime | Torque bootstrap and lifecycle control |
| docker | Yes | Yes | First boot configure | Container runtime for platform capabilities |
| devpi | Yes | Yes | First boot configure | Internal package/cache capability used by platform flows |
| httpd | Yes | Yes | First boot configure | HTTP file distribution capability |
| named | Yes | Yes | First boot configure | DNS capability |
| harbor.service | Created during configure | Yes (after creation) | First boot configure | Container registry capability |
| zt-cleaner.service | Added by update flow | Yes (after installation) | Post-environment update | Storage maintenance and cleanup |

:::note
Service composition can vary slightly by release and update level.

Some services are platform-internal and are not intended for direct day-to-day customer operation.
:::

## Security and Exposure Model

- The image is built so that component network exposure is controlled during configuration, after required credentials/settings are applied.
- Security hardening steps are applied as part of the provisioning/bootstrap process.

## Typical Customer-Visible Ports

Depending on the enabled capabilities and your environment model, typical ports include:

- 22/tcp (SSH)
- 80/tcp (HTTP file serving)
- 53/tcp and 53/udp (DNS)
- 5000/tcp and 5001/tcp (container registry endpoints)

## Scope Notes

- Final package composition can vary slightly by image build path and version.

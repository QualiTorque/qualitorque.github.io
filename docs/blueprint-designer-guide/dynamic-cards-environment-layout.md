---
sidebar_position: 19
title: Dynamic Cards (Environment Layout)
---

This guide describes the **dynamic cards** feature for the environment dashboard. You can define cards and categories using YAML, then bind data via Liquid templates to show environment outputs, grain data, workflow outputs, and more.

## Where to configure

Dynamic cards are defined in the `customization` YAML under the `layout` key.

```yaml
customization:
  layout:
    exclude:
      grains: []
      resource-types: []
    cards: []
    categories: []
```

- `exclude.grains` (optional): List of grain names to hide from the default **Resources** cards section.
- `exclude.resource-types` (optional): List of resource type prefixes to hide from the default **Resources** cards section. Values are case-insensitive and support `*` wildcard patterns.

Example:

```yaml
customization:
  layout:
    exclude:
      grains:
        - bucket
      resource-types:
        - "aws_e2_instance"
        - "aws_bucket"
        - "AWS::BUCKET"
        - "*"
```

:::note
The layout renderer uses a 4-column grid. Each card declares `size` (width) and `height` (vertical span).
:::

## Grid system

### Width (`size`)

- `1`: 1/4 width
- `2`: 1/2 width
- `3`: 3/4 width
- `4`: Full width (default)

### Height (`height`)

- `1`: Standard height (about `85px * 1 + spacing`)
- `1.5`, `2`, `2.5`, `3`, `3.5`, `4`, `4.5`: Proportional vertical span

## Data context

Liquid templates resolve against the live environment context. Key paths you can use:

- `outputs.<name>`: Environment outputs
- `inputs.<name>`: Environment inputs
- `environment.name | id | status | blueprint | space`
- `grains.<grainName>.outputs.<name>`
- `grains.<grainName>.inputs.<name>`
- `grains.<grainName>.status`
- `grains.<grainName>.drift.deployment.detected`
- `workflows.<workflowName>.outputs.<name>`

If an output's value is a JSON object encoded as a string (for example, a script/ansible grain returning
`data: "{\"gitlab\": {\"url\": \"...\"}}"`), it is automatically parsed: the output itself becomes the
parsed object (`{{ outputs.data }}` / `{{ outputs.data.gitlab.url }}`), and its top-level fields are
also merged into `outputs` (and into `grains.<grainName>.outputs` for grain-level outputs), so you can
also address them directly without the original output name, for example `{{ outputs.gitlab.url }}`.

Examples:

- `{{ outputs.api_url }}`
- `{% if environment.status == 'Active' %}positive{% else %}info{% endif %}`
- `{{ grains.my_grain.outputs.resources }}`
- `{{ outputs.gitlab.url }}`: Field from a JSON-encoded output, accessed by its parsed key
- `{{ outputs }}`: Full outputs object, including parsed JSON fields (renders as a data-card breakdown)

## Conditions and visibility

Cards support a `condition` expression (Liquid). If it evaluates to false, the card is hidden.

Actions support `visible` as either:

- `true/false`
- A Liquid expression, for example `{% if outputs.ready %}true{% else %}false{% endif %}`
- A boolean-like expression, for example `outputs.ready == true`

## Actions

Cards can include up to **4** actions. Each action is a link or a built-in handler (for cards that define `onClick`).

```yaml
actions:
  - label: "Open Console"
    url: "{{ outputs.console_url }}"
    icon: "ExternalLink"
    visible: "{% if outputs.console_url %}true{% else %}false{% endif %}"
  - label: "Docs"
    url: "https://docs.example.com"
```

## Card types

Fields marked as **Liquid** can be plain strings or Liquid templates.

### Base fields (all cards)

```yaml
type: <card-type>
name: <unique-name>
display_name: <title>             # Optional
condition: <Liquid expression>    # Optional
size: 1|2|3|4                     # Optional (default 4)
height: 1|1.5|2|2.5|3|3.5|4|4.5   # Optional (default 1)
actions:                          # Optional
  - label: <string>
    url: <Liquid>
    icon: <IconName>
    visible: <boolean|Liquid>
    disabled: <boolean>
```

### 1) Image Card (`image-card`)

```yaml
type: image-card
name: chassis
display_name: "UCS Chassis"
image: "{{ outputs.chassis_image_url }}"
data:
  - name: "Model"
    value: "{{ outputs.chassis_model }}"
  - name: "Summary"
    value: "{{ outputs.chassis_summary }}"
size: 2
height: 2
```

### 2) Icon Card (`icon-card`)

`image` is optional. If omitted, the card uses the environment blueprint icon (and falls back to the default blueprint icon if unavailable).

```yaml
type: icon-card
name: openshift
display_name: "OpenShift"
image: "https://example.com/openshift.svg"
status: "{% if outputs.cluster_ready %}positive{% else %}warning{% endif %}"
data:
  - name: "Version"
    value: "{{ outputs.ocp_version }}"
  - name: "Nodes"
    value: "{{ outputs.node_count }}"
size: 1
height: 1
```

### 3) Status Card (`status-card`)

```yaml
type: status-card
name: health
display_name: "System Health"
status: "{% if outputs.healthy %}positive{% else %}negative{% endif %}"
data:
  - name: "Uptime"
    value: "{{ outputs.uptime }}"
  - name: "SLA"
    value: "99.9%"
size: 1
```

### 4) Resource Card (`resource-card`)

Resources can be static or resolved from a Liquid template returning an array.

```yaml
type: resource-card
name: servers
display_name: "Servers"
items:
  - name: "Server 1"
    value: "Online"
    status: "positive"
    icon: "server"
  - name: "Server 2"
    value: "Offline"
    status: "negative"
    icon: "server"
size: 3
height: 1.5
```

Dynamic array example:

```yaml
type: resource-card
name: servers-dynamic
display_name: "Compute Resources"
items: "{{ grains.compute.outputs.resources }}"
size: 3
height: 1.5
```

### 5) Data Card (`data-card`)

`data` supports both:

- Explicit rows (`[{ name, value, action? }]`)
- A Liquid template that resolves to an object (auto-converted to rows)

```yaml
type: data-card
name: links
display_name: "Quick Links"
status: "{% if outputs.healthy %}positive{% else %}warning{% endif %}"
data:
  - name: "Dashboard"
    value: "Open"
    action:
      label: "Open"
      url: "{{ outputs.dashboard_url }}"
      icon: "ExternalLink"
  - name: "API"
    value: "{{ outputs.api_url }}"
size: 2
height: 1.5
```

Object parsing example:

```yaml
type: data-card
name: details
display_name: "Access Details"
height: 2.7
data: "{{ outputs }}"
```

If `outputs` resolves to:

```json
{
  "bucket_arn": "arn:aws:s3:::dbs-akxlqtf3gjly",
  "bucket_bucket_domain_name": "dbs-akxlqtf3gjly.s3.amazonaws.com"
}
```

It is rendered like:

```yaml
data:
  - name: "bucket_arn"
    value: "arn:aws:s3:::dbs-akxlqtf3gjly"
  - name: "bucket_bucket_domain_name"
    value: "dbs-akxlqtf3gjly.s3.amazonaws.com"
```

:::note
On `data-card`, `icon-card`, `status-card`, `image-card`, and `resource-card`, any data row whose
`name` looks like a secret is masked with a reveal toggle instead of shown in the clear. This is
automatic; there is no config flag to opt in.

A name counts as a secret when it contains a word like `password`, `passwd`, `pwd`, `secret`,
`token`, or `credential` (singular or plural), or a qualified key such as `api_key`, `sshKey`,
`private_key`, `access_key` or `secret_key`. Bare `key` on its own does not qualify, so public
references like `public_key`, `kms_key_id` and `Key Pair` stay readable. A name ending in a
pointer word (`ssh_key_name`, `api_key_arn`) is treated as a reference to the secret rather than
the secret itself and is also left readable.
:::

### 6) Iframe Card (`iframe-card`)

:::warning Beta
The `iframe-card` capability is currently in beta and may change in behavior or schema.
:::

Supports direct URL or a `fetch-to-srcDoc` flow with optional auth.

```yaml
type: iframe-card
name: grafana
display_name: "Grafana"
url: "{{ outputs.grafana_url }}"
allow: "fullscreen"
sandbox: "allow-scripts allow-same-origin"
loading: "lazy"
focusOverlay: true
focusOverlayText: "Click to enable keyboard"
size: 4
height: 3
```

Request-backed iframe:

```yaml
type: iframe-card
name: guacamole
display_name: "Remote Console"
request:
  url: "{{ outputs.console_url }}"
  method: "GET"
  headers:
    X-Env-Id: "{{ environment.id }}"
  auth:
    type: "bearer"
    token: "{{ outputs.console_token }}"
focusOnClick: true
autoFocus: true
size: 4
height: 3
```

### 7) Blueprint Card (`blueprint-card`)

Shows a blueprint graph preview and a solution link (same design as the catalog drawer).

```yaml
type: blueprint-card
name: service_health
display_name: "{{ environment.blueprint.display_name }}"
blueprint: "{{ environment.blueprint.name }}"
# Optional overrides
# repository_name: "{{ environment.blueprint.repository }}"
# blueprint_folder: "{{ environment.blueprint.path }}"
height: 2
```

### 8) Drift Card (`drift-card`)

Monitors drift for specific grains and exposes built-in actions.

```yaml
type: drift-card
name: drift
display_name: "Drift Detection"
grains:
  - compute
  - network
size: 2
height: 1.5
```

### 9) Runtime Card (`runtime-card`)

Embeds the environment runtime widget (uptime, time-remaining, and progress), so you do not need
to reconstruct it from outputs. It has no extra fields beyond the base card fields.

```yaml
type: runtime-card
name: runtime
display_name: "Runtime"
size: 2
height: 1
```

### 10) Stack Card (`stack-card`)

Stacks multiple cards vertically inside one grid cell.

```yaml
type: stack-card
name: stack-example
size: 1
height: 2
items:
  - type: icon-card
    name: top
    height: 1
    image: "https://example.com/icon.svg"
    status: "positive"
    data:
      - name: "Top"
        value: "{{ outputs.top_value }}"
  - type: status-card
    name: bottom
    height: 1
    status: "info"
    data:
      - name: "Bottom"
        value: "{{ outputs.bottom_value }}"
```

### 11) Container Card (`container-card`)

Groups cards vertically **without borders and headers** for the inner cards.

```yaml
type: container-card
name: infra-container
display_name: "Infrastructure"
size: 3
height: 4
items:
  - type: image-card
    name: ucs
    height: 2
    image: "{{ outputs.chassis_image_url }}"
    data:
      - name: "Model"
        value: "{{ outputs.chassis_model }}"
  - type: image-card
    name: netapp
    height: 1
    image: "{{ outputs.storage_image_url }}"
    data:
      - name: "Capacity"
        value: "{{ outputs.storage_capacity }}"
```

## Complete example

```yaml
customization:
  layout:
    cards:
      - type: status-card
        name: env-status
        display_name: "Deployment Status"
        status: "{% if environment.status == 'Active' %}positive{% else %}info{% endif %}"
        data:
          - name: "Status"
            value: "{{ environment.status }}"
          - name: "Blueprint"
            value: "{{ environment.blueprint }}"
        size: 2
        height: 1
        actions:
          - label: "Open Deployment"
            url: "{{ outputs.environment_url }}"
            icon: "ExternalLink"
            visible: "{% if outputs.environment_url %}true{% else %}false{% endif %}"

      - type: data-card
        name: endpoints
        display_name: "Endpoints"
        data:
          - name: "API"
            value: "{{ outputs.api_url }}"
            action:
              label: "Open"
              url: "{{ outputs.api_url }}"
              icon: "ExternalLink"
          - name: "UI"
            value: "{{ outputs.ui_url }}"
            action:
              label: "Open"
              url: "{{ outputs.ui_url }}"
              icon: "ExternalLink"
        size: 2
        height: 1.5

    categories:
      - name: "Infrastructure"
        items:
          - type: container-card
            name: infra
            size: 3
            height: 4
            display_name: "Core Systems"
            items:
              - type: image-card
                name: chassis
                height: 2
                image: "{{ outputs.chassis_image_url }}"
                data:
                  - name: "Model"
                    value: "{{ outputs.chassis_model }}"
                  - name: "Summary"
                    value: "{{ outputs.chassis_summary }}"
              - type: resource-card
                name: servers
                height: 2
                display_name: "Servers"
                items: "{{ grains.compute.outputs.resources }}"

          - type: stack-card
            name: status-stack
            size: 1
            height: 4
            items:
              - type: icon-card
                name: openshift
                height: 1
                image: "https://example.com/openshift.svg"
                status: "{% if outputs.cluster_ready %}positive{% else %}warning{% endif %}"
                data:
                  - name: "Version"
                    value: "{{ outputs.ocp_version }}"
              - type: drift-card
                name: drift
                height: 1
                grains:
                  - compute
                  - network
```

## Related topics

- [Blueprint YAML Structure - Customization](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#customization)
- [Blueprint YAML Structure](/blueprint-designer-guide/blueprints/blueprints-yaml-structure)

---
sidebar_position: 19
title: Dynamic Cards (Environment Layout)
---

This guide describes the **dynamic cards** feature for the environment page. You can define cards and categories using YAML, then bind data via Liquid templates to show environment outputs, grain data, workflow outputs, and more.

:::info
Dynamic cards render in the next UI at [next.qtorque.io](/next-ui). The classic portal shows the default environment layout and ignores the `layout` customization.
:::

<!-- SCREENSHOT: https://next.qtorque.io/<space>/environments/<env-id> — an environment page that renders several dynamic cards (for example a status card, a data card, and an iframe card) -->

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
The layout renderer places cards in rows that wrap. Each card declares `size` (how many cards of that size fit side by side in one row) and `height` (vertical span).
:::

## Grid system

### Width (`size`)

The `size` value is the **number of cards that fit across one row**, not the number of columns the card spans. A larger value therefore produces a *narrower* card.

- `1`: Full width (one card per row)
- `2`: 1/2 width (two cards per row)
- `3`: 1/3 width (three cards per row)
- `4`: 1/4 width (four cards per row, default)

The exact width is `(row width - 20px * (size - 1)) / size`, so cards of the same size always fill a row with 20-pixel gaps between them. Cards of different sizes can share a row; a card wraps to the next row when it does not fit. Cards never shrink below 250 pixels wide, so on narrow screens they wrap earlier.

Fractional values are allowed. For example, `size: 2.1` renders a card slightly narrower than half width so that it fits on one row next to two quarter-width (`size: 4`) cards.

Cards nested inside a `stack-card` ignore their own `size` and always fill the width of the parent card.

### Height (`height`)

- `1`: Standard height (`85px`)
- `1.5`, `2`, `2.5`, `3`, `3.5`, `4`, `4.5`: Proportional vertical span

The exact height is `height * 85px + (height - 1) * 20px`, so a card with `height: 2` is exactly as tall as two `height: 1` cards stacked with the standard 20-pixel gap. Fractional values such as `2.7` are allowed. The default is `1`, except for `blueprint-card`, which defaults to `2`.

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
size: 1|2|3|4                     # Optional (default 4). Cards per row: 1 = full width, 4 = 1/4 width
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
name: server
display_name: "Application Server"
image: "{{ outputs.server_image_url }}"
data:
  - name: "Model"
    value: "{{ outputs.server_model }}"
  - name: "Summary"
    value: "{{ outputs.server_summary }}"
size: 2
height: 2
```

### 2) Icon Card (`icon-card`)

`image` is optional. If omitted, the card uses the environment's blueprint icon (and falls back to the default blueprint icon if unavailable).

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
size: 4
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
size: 4
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
size: 2
height: 1.5
```

Dynamic array example:

```yaml
type: resource-card
name: servers-dynamic
display_name: "Compute Resources"
items: "{{ grains.compute.outputs.resources }}"
size: 2
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
size: 1
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
size: 1
height: 3
```

### 7) Blueprint Card (`blueprint-card`)

Shows a blueprint graph preview and a link to the blueprint (same design as the catalog drawer).

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
size: 4
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

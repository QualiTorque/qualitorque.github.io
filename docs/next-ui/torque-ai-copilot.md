---
sidebar_position: 6
title: Torque Copilot
description: "Using the Torque AI Copilot chat in next.qtorque.io: chat history, focus and approval modes, models, approvals, and launching environments from the chat."
---

# Torque Copilot

Copilot is Torque's built-in AI assistant. In the next UI it is a conversational agent, **Torque AI**, that you open from the top bar. It can answer questions from the documentation, author and edit blueprints, and launch, monitor, and fix environments, all in natural language. It understands the context of your blueprints, environments, repositories, and inventory, so requests can be phrased the way you would describe them to a colleague.

Copilot is enabled on every Torque account. Whether a user sees the **Copilot** icon depends on the user's role and permissions; account admins always have it. The AI provider that powers Copilot is configured in **Admin > Configurations > Copilot Settings**. See [Copilot Settings](/admin-guide/configurations#4-copilot-settings).

## Opening Copilot

Click **Copilot** in the top bar. The panel opens on the right and stays available while you work. Its header shows the space Copilot operates in. Click **Open in New Tab** to use Copilot as a full page, the **AI Chat Workspace**, with a chat history pane that you can resize.

The first time, the panel shows **No previous chats found** and a **Start New Chat** button.

<!-- SCREENSHOT: https://next.qtorque.io/<space> with the Copilot panel open — the panel header with the space chip and Open in New Tab, and the chat history list -->

## Chat history

Each conversation keeps its own context, so starting a new chat gives you a clean slate. The history pane lists your chats grouped by **Today**, **Recent**, **Last 30 days**, and **Older**. You can search chats, **Rename** a chat, or delete it. Deleting a chat is permanent.

## Composer

Type your request in the composer at the bottom of the panel. The controls around it shape how Copilot works:

| Control | Description |
|---|---|
| **Connect a repository** | Attaches a Git repository to the chat. Any work that produces code, such as creating or editing a blueprint, is authored in that repository: Copilot commits to a branch and opens a pull request for your review. Use **Disconnect repository** to detach it. |
| **Focus mode** | Narrows the assistant to one area. **Auto** uses all skills and picks what fits. **Docs** answers questions from the documentation. **Blueprints** authors and edits blueprints. **Deployments** launches, monitors, and fixes environments. |
| **Approval mode** | **Default Approvals** asks you to approve each change before it is applied. **Autopilot** runs low-risk steps without asking; destructive steps such as deleting or terminating still require your approval. |
| **Model** | The model used for the conversation. **GPT-5.4** is the default and the most capable option. **GPT-5 Mini** is faster and lower cost. |
| **Reasoning effort** | **Low**, **Medium**, or **High**. Higher effort applies more reasoning to complex requests at the cost of a slightly longer response. |
| **Stop** | Stops the current generation. |

<!-- SCREENSHOT: https://next.qtorque.io/<space> with a Copilot chat open — the composer with the repository, focus mode, approval mode, model, and reasoning controls visible -->

## Approving actions

When Copilot wants to perform an action that needs your consent, the message shows **Approval Required** with **Approve** and **Deny** buttons. Expand the message to see the tool that will run, its arguments, and its result, or **Open full diff** to review a proposed file change before approving it.

## Launching and monitoring from the chat

Copilot can launch an environment without leaving the chat. The launch form appears inline with the same tabs as the catalog form: **General**, **Inputs**, **Tags**, **Owners**, and **Workflows**. The form states the space the environment will be launched in. A launch may wait for an approval policy like any other launch.

While an environment deploys, Copilot shows a monitoring card with the progress of its grains and lets you **Open environment**, **Continue**, or **Stop / run in background**. **Stop watching** ends the monitoring; the environment itself keeps running.

## What you can ask

- **Questions about your account.** "How many environments are active in the Dev space?" or "Which providers in my inventory have a failing Discovery capability?"
- **Blueprint design.** "Create a blueprint that provisions a three-tier web application with a load balancer, two application VMs, and a database, and expose the web tier as an output." Blueprint work needs a connected repository.
- **Environment operations.** "Launch the aws-eks-sandbox blueprint and tell me when it is ready." or "My last environment failed, find the error and suggest a fix."
- **Documentation.** "How do I connect a repository?" or "How do I define an approval policy?"

:::warning
Torque AI can make mistakes. Review Copilot's answers and proposed changes before relying on them, especially for actions that modify environments or open pull requests.
:::

## Copilot in the classic portal

The classic portal offers the earlier Copilot features: the documentation chatbot and the Cloud Copilot in the blueprint designer. Both remain available and are configured on the same **Copilot Settings** page. See [Copilot Settings](/admin-guide/configurations#4-copilot-settings).

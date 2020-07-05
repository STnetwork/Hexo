---
date: 2020-07-04T22:00:00Z
title: OSI Model - Layer 2 - Data Layer
excerpt: ''
tags:
- osi

---
![](/images/data-osi-model-1.svg)

![](/images/2-data-link-layer.svg)


```zsh
* Provides error-free transmission from one node to the next over physical media.
* Establishes and terminates links between nodes.
* Responsible for traffic control.
* Transmits and receives frames sequentially.
* Responsible for frame acknowledge.
* Provides and expects frame acknowledge.
* Detects and recovers from errors on Physical Layer.
* Retransmits no acknowledged.
* Handles duplicate frame receipt.
* Responsible for frame delimiting.
* Creates and recognizes frame boundaries.
* Responsible for error checking
* Checks received frames for Data integrity.
* Provides media access management.
* Determines when node is allowed to use physical media.
```
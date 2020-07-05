---
date: 2020-07-04T22:00:00Z
title: OSI Model - Layer 4 - Transport Layer
excerpt: ''
tags:
- osi

---
![](/images/transport-osi-model-1.svg)

![](/images/4-transport-layer.svg)


```zsh
* Ensures messages delivered error-free.
* Ensures messages delivered in sequence.
* Ensures messages delivered with no loss or duplication.
* Relieves higher protocols of concern for transfer of data.
* Size and complexity of transport protocols dependent on service provided by network layer.
```


**Message Segmentation Function** :
	* Accepts messages from session layer
	* Splits message into smaller units
	* Imposes message size limits on network layer protocols
	* Prepares header for each smaller unit created
	* Passes smaller units to network layers
	* Reassembles message at destination
	* Header for smaller units contain certain elements
	* Header contains start and end flag
	* Header contains sequence information



**Other Transport Layer Functions** :
	* Message acknowledgment
		* Provides reliable end-to-delivery of messages.
		* End-to-end delivery accompanied by acknowledgments.
	* Message traffic control
		* Controls rate of traffic send when no buffers available
	* Session multiplexing
		* Breaks all the data coming in on one link into separate data streams
		* Those data streams called sessions.
		* Tracks which message belongs to which session.


**End-to-End Layers** :
	* Transport layer above layers not responsible for transmission between nodes.
	* Transport and above layers responsible for source to destination transmission
	* Source-to-destination transmissions also called end-to-end transmissions.
	* Upper layers not concerned with underlying communications facility

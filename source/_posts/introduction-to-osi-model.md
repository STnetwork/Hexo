---
date: 2020-07-03T22:00:00.000+00:00
title: OSI Model
excerpt: ''
tags:
- osi

---
![](/images/osi-model-7-layers.svg)


## Introduction


The **OSI Model** when it was first created came out in two parts :

```zsh
* The First part was the **Abstract Model**.
* The actual model with its seven layers.
* The Second part was actually a **Set of specially created protocols**, that were designed to illustrate how the protocols would fit inside this **abstract model**.
* Protocols not actually used in any network system.
* Devices to teach how protocols work with Networks to carry data.
* Model for organizations creating new protocols.
* Stands for Open Systems Interconnection Reference Model.
* Created as a Reference Model and Teaching aid.
* Not intended to reflect any actual network architecture.
```

**Mnemonics** for memorizing these Layers in the proper order :

* **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing.
* **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way



## Layer 1 - Physical Layer


![](/images/physical-osi-model-1.svg)

![](/images/1-physical-layer.svg)


```zsh
* Bottom Layer
* Concerned with Physical transmission of raw Data.
* Transmits data in form 1s and 0s.
* Defines encoding methods to transmit Data.
* Defines how bits are placed on media.
* Defines how to know when bits Start & Stop.
* Defines specifications for media usage.
* Defines kinds of media permitted.
* Defines how physical connections are made
* Defines pin usage in physical connections.
* Specifies the Standards that apply to specific types of media.
```



## Layer 2 - Data Layer


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



## Layer 3 - Network Layer


![](/images/network-osi-model-1.svg)

![](/images/3-network-layer.svg)


```zsh
* Controls the operations of the subnetwork it is on.
* Determines best physical path for data.
* Uses network conditions to choose best path.
* Uses priority of service to determine best path.
* Uses other factors to determine best path.
```



## Layer 4 - Transport Layer


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



## Layer 5 - Session Layer


![](/images/session-osi-model-1.svg)

![](/images/5-session-layer.svg)


```zsh
* Responsible for establishing sessions between processes running on different computers.
* Provides several function to accomplish this.
* Session establishment, maintenance, and termination.
* Session support
```

**Establishment Maintenance Termination** :
* Allows application processes on different machines to do several things between the machines.
* Allows processes to establish a connection.
* Allows processes to use a connection.
* Allows processes to terminate a connection.
* Each connection called a session.

**Session Support** :
* Performs the function of allowing processes to communicate over network.
* Performs security
* Performs name recognition.
* Performs logging on.
* Performs other functions that are less common.



## Layer 6 - Presentation Layer


![](/images/presentation-osi-model-1.svg)

![](/images/6-presentation-layer.svg)


```zsh
* Formats data to be presented to the application layer.
* Translator for the network.
* At sending station translates data from application layer format to common format.
* At receiving station translates data from common format to format used by application layer.
```

**Presentation Layer Functions** :
	* Character code translation.
		* ASCII to EBCDIC
	* Data conversation.
		* Bit order
		* CR-CR/LF
		* Integer-floating point
	* Data compression
		* Reduces number of bits needed to transmit data.
	* Data encryption
		* Encryption of data for security purposes.
		* Encryption of passwords.



## Layer 7 - Application Layer


![](/images/application-osi-model-1.svg)

![](/images/7-application-layer.svg)


```zsh
* Serves as window for uses and applications to access network service.
* Provides a variety of commonly used functions.
```

**Application Layer Common Function** :

* Resource sharing.
* Device redirection
* Remote file access.
* Remote printer access.
* Network management.
* Directory services.
* Email
* Instant messaging
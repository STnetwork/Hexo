---
date: 2020-07-06T22:00:00.000Z
title: TCP/IP Model
excerpt: ''
tags:
  - model
  - ip
  - tcp
_template: blog_post
---





![](/images/osi_compare_tcp.png)

    * Was created by the Department of Defense in the 1970s
    * Is a reduced version of the OSI Model
    * Is based on and around the TCP/IP Protocol suite.

* **TCP/IP Model** has four layers :
  * Application Layer
  * Transport Layer
  * Internet Layer
  * Network access or network interface layer
* All TCP/IP protocols are located on the top three layers.
* Protocols located on bottom layer are not part of the TCP/IP suite.
* Each layer corresponds to one or more OSI model layers.

## Common TCP-IP Protocols

![](/images/tcp-ip_model2.png)



## Layer 1 - Application Layer


```zsh
* Defines protocols, services, and processes that allow programs and users to interface with the network
* Defines how programs interface with the Transport Layer services to use the network
```
**Common Application Layer Protocols** :
* HTTP
* Telnet
* FTP
* TFTP
* SNMP
* DNS
* SMTP
* DHCP
* ...



## Layer 2 - Transport Layer


```zsh
* Provides communications session management between host computers
* Defines level of service and status of connections used when transporting data
```

**Common Transport Layer Protocols** :
* TCP
* UDP
* RTP
* ...



## Layer 3 - Internet Layer


```zsh
* Internet layer packages data into IP datagrams called packets
* Header of packet contains Source and Destination information
* Internet Layer uses this information to forward packets between hosts across the network
* It performs routing of IP packets
```

**Common Internet Layer Protocols** :
* IP
* ICMP
* ARP
* RARP
* ...



## Layer 4 - Network Interface Layer


```zsh
* Sometimes called Network Access Layer.
* Specifies how data is physically sent through a network.
* Specifies how bits are electrically signaled by hardware.
* Defines how hardware devices interface with network medium.
* Example : Coaxial cable, optical cable, and twisted pair cable.
```

**Standards Defined by This Layer** :
* Ethernet
* Token Ring
* FDDI
* X.25
* Frame Relay
* RS-232
* V.35
* ...

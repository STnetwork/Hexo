---
date: 2020-07-04T22:00:00Z
title: OSI Model - Layer 5 - Presentation Layer
excerpt: ''
tags:
- osi

---
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
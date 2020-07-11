---
date: 2020-07-11T00:00:00+02:00
title: WINDOWS - ngelam.sys missing or currupt
excerpt: ''
tags: []

---
# Windows\\system32\\drivers\\ngelam.sys

## ELAM recovery

By default, it is the responsibility of the 3rd party AV service to store a copy of the ELAM driver in the registry defined backup location, from where a copy of the ELAM driver can be obtained, in case the original file gets corrupted.

![](/images/image-14.png)

This is usually the path 'C:\\Windows\\ELAMBKUP' defined in registry location 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\EarlyLaunch' via reg_key BackupPath

![](/images/image-15.png)
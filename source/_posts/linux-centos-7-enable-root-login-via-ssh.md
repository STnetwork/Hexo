---
date: 2020-09-07T22:00:00.000Z
title: Linux - CentOS 7 - Enable Root Login via SSH
excerpt: ''
tags:
  - vi
  - root
  - centos
  - linux
_template: blog_post
---





## Introduction

By default, the login root via SSH is disabled, follow the instruction to allow it.

### Edit `/etc/ssh/sshd_config`

```zsh
vi /etc/ssh/sshd_config
```

Uncomment the line :

```
PermitRootLogin yes
```

Press Echap then type `:wq` & Press Enter

To finish :

```zsh
systemctl restart sshd
```

---
date: 2020-02-10
title: Linux - CentOS 7 - How to install_upgrade ZSH 5.8
tags:
- zsh
- centos

---
## ZSH 5.8 on CentOS 7

```
wget https://freefr.dl.sourceforge.net/project/zsh/zsh/5.8/zsh-5.8.tar.xz
yum install wget gcc autoconf ncurses-devel -y
tar -xvf zsh-5.8.tar.xz
cd zsh-5.8
```

---------------------------------------------

```
./Util/preconfig
./configure && make && make test && make install
```

-------

```
echo /usr/local/bin/zsh | sudo tee -a /etc/shells
chsh -s /usr/local/bin/zsh
```

---------------------------------------------

### LC_CTYPE: cannot change locale (UTF-8): No such file or directory Fix :

```
vi /etc/environment
```

add these lines :

```
LANG=en_US.utf-8
LC_ALL=en_US.utf-8
```
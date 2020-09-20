---
date: 2020-09-21T00:00:00+02:00
title: 'Linux - CentOS 8 - CSF Firewall instead of FirewallD - '
excerpt: ''
tags:
- csf
- firewalld
- firewall
- linux
- centos

---

![](/images/csf_firewall.png)

## Introduction :

CentOS 8 has a default firewall application who is FirewallD.

Config Server Firewall (or CSF) is a free and advanced firewall for most Linux distributions and Linux based VPS. In addition to the basic functionality of a firewall – filtering packets – CSF includes other security features, such as login/intrusion/flood detections.

As mentioned CSF includes UI integration for cPanel, DirectAdmin and Webmin, but this tutorial only covers the command line usage. CSF is able to recognize many attacks, such as port scans, SYN floods, and login brute force attacks on many services. It is configured to temporarily block clients who are detected to be attacking the cloud server.

### Install and Enable EPEL Repository on RHEL 8.x Server

```zsh
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
```

### Install Prerequisites

Most Perl modules must be installed by default when you install Perl on your system , but you will need to manually install the following Perl modules.

```zsh
dnf install perl-libwww-perl.noarch perl-LWP-Protocol-https.noarch perl-GDGraph wget tar perl-Math-BigInt
```

### Install CSF

Download and install the latest CSF archive source code using the wget command from the following URL.

```zsh
cd /usr/src
wget https://download.configserver.com/csf.tgz
tar -xzf csf.tgz
cd csf
sh install.sh
```

When you have finished the installation, run the “csftest.pl” script to check if your system has the required iptable modules.

```zsh
perl /usr/local/csf/bin/csftest.pl
```

```zsh
Testing ip_tables/iptable_filter...OK
Testing ipt_LOG...OK
Testing ipt_multiport/xt_multiport...OK
Testing ipt_REJECT...OK
Testing ipt_state/xt_state...OK
Testing ipt_limit/xt_limit...OK
Testing ipt_recent...OK
Testing xt_connlimit...OK
Testing ipt_owner/xt_owner...OK
Testing iptable_nat/ipt_REDIRECT...OK
Testing iptable_nat/ipt_DNAT...OK

RESULT: csf should function on this server
```

Make a note: You should not run any other iptables firewall configuration script. For example, if you previously used APF+BFD you can remove them by running the below script.

```zsh
sh /usr/local/csf/bin/remove_apf_bfd.sh
```

If you are using modern Linux distributions, disable the firewalld service using the systemctl command.

```zsh
systemctl stop firewalld
systemctl disable firewalld
```

Run the following command to enable the lfd daemon otherwise it will fail to start. To do so, you need to change the value “TESTING = 1” to “TESTING = 0” in the file “/etc/csf/csf.conf” using the sed command.

```zsh
sed 's/TESTING = "1"/TESTING = "0"/g' /etc/csf/csf.conf
```

Run the following command to restart the CSF firewall for changes to take effect. You can easily manage the CSF firewall using the csf command.

```zsh
csf -r
```

or

```zsh
csf --restart
```
---
date: 2020-07-01T22:00:00.000+00:00
title: CentOS 7 - OneDrive Client
excerpt: ''
tags:
- onedrive
- centos

---
# OneDrive Client for Linux

A free Microsoft OneDrive Client which supports OneDrive Personal, OneDrive for Business, OneDrive for Office365 and Sharepoint.

This powerful and highly configurable client can run on all major Linux distributions, as a Docker container and on FreeBSD. It supports one-way and two-way sync capabilities and securely connects to Microsoft OneDrive services.


## Setup

```zsh
yum install libcurl-devel
yum install sqlite-devel
curl -fsS https://dlang.org/install.sh | bash -s dmd
source ~/dlang/dmd-2.092.1/activate
git clone https://github.com/abraunegg/onedrive.git
cd onedrive
.\configure
make
sudo make install
```

## Configure OneDrive

```zsh
onedrive
mkdir -p ~/.config/onedrive
cd onedrive
cp ./config ~/.config/onedrive/config
nano ~/.config/onedrive/config
```

### Available options:

```
sync_dir: directory where the files will be synced
```

```
skip_file: any files or directories that match this pattern will be skipped during sync.
```

For example,

If I want to sync everything except Confidential and Personal Folders

\# Directory where the files will be synced

```
skip_dir = "example|example"
```

Note: after changing the sync list, you must perform a full synchronization by executing

```zsh
onedrive --syncronise
```

## Enable service as per the following:

```zsh
systemctl --user enable onedrive
systemctl --user start onedrive
systemctl status onedrive -l
```
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

For example, if you want to sync everything except Confidential and Personal Folders

### Directory where the files will be synced

```
skip_dir = "example|example"
```

### Selective sync via 'sync_list' file

Selective sync allows you to sync only specific files and directories.
To enable selective sync create a file named `sync_list` in `~/.config/onedrive`.
Each line of the file represents a relative path from your `sync_dir`. All files and directories not matching any line of the file will be skipped during all operations.
Here is an example of `sync_list`:
```text
# sync_list supports comments
# Exclude my Backup folder
Backup
# Exclude this single document
Documents/latest_report.docx
# Exclude all Work/Project directories
Work/Project*
notes.txt
# Exclude /Blender in the ~OneDrive root but not if elsewhere
/Blender
Cinema Soc
Codes
Textbooks
Year 2
```
**Note:** after changing the sync_list, you must perform a full re-synchronization by adding `--resync` to your existing command line - for example: `onedrive --synchronize --resync`

### How to 'skip' directories from syncing?
There are several mechanisms available to 'skip' a directory from the sync process:
*   Utilise 'skip_dir'
*   Utilise 'sync_list'

## Enable service as per the following:

```zsh
systemctl --user enable onedrive
systemctl --user start onedrive
systemctl status onedrive -l
```
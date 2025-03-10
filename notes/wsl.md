sudo apt update && sudo apt install -y python3 python3-pip
sudo apt update && sudo apt upgrade -y python3
apt list -a python3 | grep python3

lsb_release -c
lsb_release -a
sudo apt update && sudo apt upgrade -y

Ubuntu 24.04 LTS
sudo do-release-upgrade
wsl --list --verbose
wsl --shutdown

vim ~/.bashrc
alias python='/usr/bin/python3'
alias py='/usr/bin/python3'
source ~/.bashrc

Alias: Only works in the shell. Doesn't affect scripts.
Symlink: Works everywhere (shell + scripts).
For long-term use, a symlink is better.

alias py
alias python

sudo ln -s /usr/bin/python3 /usr/local/bin/python
sudo ln -s /usr/bin/python3 /usr/local/bin/py

ping -c 4 google.com

sudo npm install -g n
sudo n lts

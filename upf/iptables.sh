#!/bin/bash

sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'
iptables -t nat -A POSTROUTING -o enp3s0 -j MASQUERADE
iptables -I INPUT -i uptun -j ACCEPT

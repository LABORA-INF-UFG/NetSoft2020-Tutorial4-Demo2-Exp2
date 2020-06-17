#/bin/bash

ip tuntap add mode tun dev uptun
ip addr add 45.45.0.1/16 dev uptun
ip link set dev uptun up
sh -c 'echo 1 > /proc/sys/net/ipv4/ip_forward'
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
iptables -I INPUT -i uptun -j ACCEPT

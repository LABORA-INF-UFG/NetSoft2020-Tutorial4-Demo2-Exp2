From free5gc-base

RUN apt-get install -y iptables

COPY free5gc.conf /free5gc/install/etc/free5gc/free5gc.conf
COPY setup-uptun.sh /root/setup-uptun.sh
RUN chmod +x /root/setup-uptun.sh

CMD /root/setup-uptun.sh; /free5gc/free5gc-upfd

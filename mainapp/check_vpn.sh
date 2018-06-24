IP='10.8.0.1'
VPNTIME=5

sudo nohup /Applications/Tunnelblick.app/Contents/Resources/openvpn/openvpn-2.5_git_6844188-openssl-1.1.0h/openvpn --config ~/hack/mainapp/configs/vpngate_113.156.101.72_udp_1845.ovpn & sleep $VPNTIME & fping -c1 -t300 $IP 2>/dev/null 1>/dev/null

sleep $VPNTIME

if [ "$?" = 0 ]
then
	sudo killall -9 openvpn
	#echo "1" 
	exit 1
else
	sudo killall -9 openvpn
	#echo "0"
	exit 0
fi

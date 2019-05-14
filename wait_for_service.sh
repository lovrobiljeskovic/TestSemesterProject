#!/bin/sh

ip="$1"
port="$2"
max=60

if [ "$#" -ne 2 ]; then
    echo "Usage $0 [ip] [port]"
    exit 1
fi

count=1
until nc -z "$ip" "$port"; do
    echo "Waiting for $ip:$port to start"
    sleep 1
    count=$((count+1))
    if [ "$count" -eq "$max" ]; then 
        break;
    fi
done
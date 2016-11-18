# Alive Alive Not-Alive

Use [node-ping](https://github.com/danielzzz/node-ping) to filter a list of hostnames (provided on stdin) based on whether they are pingable (sent to stdout) or not (sent to stderr).

```
./alive-alive-not-alive <<<EOF
npmjs.com
ryandahlrockshuzzahhuzzahhuzzah.com
nodejs.org
anotherfakedomain_nopenopenope.com
EOF
```

Real ones go to stdout, unreachable addresses go to stderr.

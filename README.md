# dappu

## Fix Ganache to start when the host IP address has changed
rm ~/Library/Application\ Support/Ganache/default/Settings

## Create the network one time

```
docker network create blockchain
```

## Client container

Start this from the blockchain-developer-bootcamp repo in the root directory

```
$ git clone git@github.com:bush/blockchain-developer-bootcamp.git  
$ cd blockchain-developer-bootcamp 
$ /path/to/dappu/docker/dappu
```

# Edit truffle-config.js

Make sure the the host is set to "ganache" and the port is set to 8545

```
networks: {
    development: {
      host: "ganache",
      port: 8545,
      network_id: "*" // Match any network id
    },
  },
```



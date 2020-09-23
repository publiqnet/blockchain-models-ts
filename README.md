# publiq-models-ts
Publiq Models

```console
user@pc:~$ git clone https://github.com/publiqnet/publiq-models-ts
user@pc:~$ rm -rf publiq-models-ts/models/
user@pc:~$ rm publiq-models-ts/ModelTypes.ts
user@pc:~$ install/bin/publiq.pp/idl_ts publiq.pp/src/libblockchain/message.idl publiq-models-ts Publiq
user@pc:~$ rm -rf publiq-models-ts/bin
user@pc:~$ cd publiq-models-ts
user@pc:~/publiq-models-ts$ npm run build
user@pc:~/publiq-models-ts$ git commit -am "commit message"
user@pc:~/publiq-models-ts$ git push
```

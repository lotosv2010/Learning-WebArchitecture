## [docker+nginx部署项目](https://www.jianshu.com/p/acf41b9bb43b)

## [mongo-express](https://hub.docker.com/_/mongo-express)
```sh
docker run -d --name mongo-express -p 8081:8081 --link mongo:mongo --env ME_CONFIG_MONGODB_ADMINUSERNAME='root' --env ME_CONFIG_MONGODB_ADMINPASSWORD='123456' mongo-express
```

## mongodb
```sql
db.createUser({user:"root",pwd:"123456", roles: [{role:"root",db:"admin"}]})
```

## [Docker问题：bash: vi: command not found](https://blog.csdn.net/weixin_39800144/article/details/79231002)
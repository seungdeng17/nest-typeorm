# nest-typeorm

https://github.com/ZeroCho/sleact

moudle
- @mudle 붙은 다른 모듈 > imports
- @injectable 붙으면 > providers
- controller > controllers
- 다른 모듈에서 쓸수있게 > exports (imports에서 가져올 수 있게됨)

controller, service (nest g mo ~, co ~, s ~)

ConfigModule, ConfigService (env)

implements, @injectable(DI) (injectable 붙으면 대부분 provider)

@Body @Query @Param

decorator

interceptor

typeorm entities generation (npx typeorm-model-generator)

db connection (ormconfig, TypeOrmModule)

seeding (testing data)

http exception filter (useGlobalFilters)

class-validator (useGlobalPipes)

@UseGuards 권한체크 (auth guard > strategy > serializer)

lify cycle
![nest](https://velog.velcdn.com/images%2Fharon%2Fpost%2Fe2587453-9aa2-4f2d-9ae4-0c8c024ed42f%2Fimage.png)

transaction (queryRunner)

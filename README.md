# TipographyIP
Server for Typography shop, simple version

### For start dev version u need install db from [sequelize dialect list](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/) in your machine and create .env.development.local file and paste all env keys below

```
npm run dev
```

### For start prod version u need install db from [sequelize dialect list](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/) in your machine and field values in .env.development file

```
npm start
```

|Env param|Desc value|
|-|--------|
|SALT|usually 8 but u may paste another number for hash users password|
|PORT|port on u want start your server|
|CLIENT_URL|url for cors origin. if u have more then one client u need to add it yourself|
|DB_NAME|db name, u need to create the db yourself without tables|
|DB_USER|username db|
|DB_PASSWORD|password for your db|
|DB_HOST|host on starting your db|
|DB_DIALECT|postgres or mysql, any dialect from [sequelize dialect list](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/)|
|DB_PORT|the port on which your database is running on the machine|
|JWT_ACCESS_SECRET|secret code for jwt auth bearer|
|JWT_REFRESH_SECRET|secret code for jwt in cookie|
|MODE|always development for file .env.development.local and production for .env.development|

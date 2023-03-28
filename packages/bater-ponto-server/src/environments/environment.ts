export const environment = {
  production: !!process.env['BTPONTO_PROD'],
  mysqlHost: process.env['BTPONTO_MYSQL_HOST'],
  mysqlPort: Number(process.env['BTPONTO_MYSQL_PORT']),
  mysqlUser: process.env['BTPONTO_MYSQL_USERNAME'],
  mysqlPass: process.env['BTPONTO_MYSQL_PASSWORD'],
  mysqlDatabase: process.env['BTPONTO_MYSQL_DATABASE'],
  mysqlTypeORMSynchronize: !!process.env['BTPONTO_MYSQL_SYNCHRONIZE']
};

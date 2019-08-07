/**
 * 小程序配置文件
 */

var host = "dutcmc.com/mp/70years/backstage"

var config = {
  // 下面的地址配合云端 Server 工作
  host,
  picCollection: `https://${host}/piccollection.php`,
  login: `https://${host}/login.php`,
};

module.exports = config
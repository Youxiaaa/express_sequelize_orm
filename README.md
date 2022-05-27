## expree 使用 sequelize orm 開發範例

- 使用套件
 - cors(管理cors)
 - express
 - mysql2
 - sequelize (orm 套件)
 - sequelize-cli(sequelize 腳手架)

- sequelize-cli 使用方式
```json
sequelize init (初始化 project)
sequelize migration --name xxxx (新增migration)
sequelize db:migrate (執行未跑過的 migrations)
sequelize db:migrate:undo(恢復一次 migration)
sequelize db:migrate:undo:all (恢復所有跑過的 migrations)
```

- 參考資料
  - Sequelize 指令
    - https://dwatow.github.io/2021/05-15-raspberry-pi/sequelize-cli-beginer/
  - Sequelize 教學
    - https://youtu.be/tpso18ghda4
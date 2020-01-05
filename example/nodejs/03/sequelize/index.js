(async() => {
  const Sequelize = require('sequelize')

  // 建立连接
  const sequelize = new Sequelize('LEARNNODEJS', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  })

  // 定义模型
  const Fruit = sequelize.define('Fruit', {
    name: {
      type: Sequelize.STRING(20), 
      allowNull: false,
      // 定义为属性的一部分
      get() {
        const fname = this.getDataValue('name')
        const price = this.getDataValue('price')
        const stock = this.getDataValue('stock')
        return `${fname}(价格:¥${price} 库存:${stock}kg)`
      }
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        isFloat: { msg: "价格字段请输入数字" },
        min: { args: [0], msg: "价格字段必须大于0" }
      }
    },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        isNumeric: { msg: "库存字段请输入数字" }
      }
    }
  }, {
    // 避免自动生成时间戳字段
    timestamps: false,
    // 定义为模型选项
    getterMethods: {
      amount() {
        return this.getDataValue('stock') + 'kg';
      }
    },
    setterMethods: {
      amount(val) {
        const idx = val.indexOf('kg');
        const v = val.slice(0, idx);
        this.setDataValue('stock', v);
      }
    }
  })

  // 添加类级别方法
  Fruit.classify = function(name) {
    const tropicFruits = ['香蕉', '芒果', '椰子'] // 热带水果
    return tropicFruits.includes(name) ? '热带水果':'其他水果'
  }

  // 添加实例级别方法
  Fruit.prototype.totalPrice = function(count) {
    return (this.price * count).toFixed(2)
  }

  // 同步数据库，force: true则会删除已存在表
  let ret = await Fruit.sync({
    force: false
  })

  // 添加测试数据
  // ret = await Fruit.create({
  //   name: '香蕉',
  //   price: '2.5'
  // })

  // 查询
  ret = await Fruit.findAll()

  // 修改amount，触发setterMethods
  // ret[0].amount = '150kg'
  // console.log(ret[0].amount)
  // ret[0].save()
  
  ret.forEach(fruit => {
    const name = fruit.getDataValue('name')
    // 修改amount，触发setterMethods
    fruit.amount = '150kg'
    fruit.save()

    console.log(fruit.dataValues)
    // 使用类方法
    console.log( `${name}-->是${Fruit.classify(name)}`)
    // 使用实例方法
    console.log(`买5kg ${fruit.name} 需要¥${fruit.totalPrice(5)}`)
  })

  // 首个匹配项，若没有则为null
  ret = await Fruit.findOne({where: {
    name: '香蕉'
  }})
  console.log(ret.dataValues)
  
  // 获取数据和总条数
  ret = await Fruit.findAndCountAll()
  const { count, rows: { length } } = ret
  console.log(`count: ${count} --> rows.length: ${length}`)

  // 查询操作符
  // https://sequelize.org/v5/manual/querying.html
  const Op = Sequelize.Op
  ret = await Fruit.findAll({
    where: {
      price: {
        [Op.lt]: 10, // 小于10
        [Op.gt]: 4 // 大于3
      }
    }
  })
  ret.forEach(fruit => {
    console.log(fruit.dataValues)
  })

  // 或语句 
  ret = await Fruit.findAll({
  where: {
    price: {
      [Op.or]: [
        {[Op.gt]:3 },
        {[Op.lt]:2 }
      ]}
    }
  })
  ret.forEach(fruit => {
    console.log(fruit.dataValues)
  })

  // 分页 
  ret = await Fruit.findAll({
    offset: 0,
    limit: 2
  })
  ret.forEach(fruit => {
    console.log(fruit.dataValues)
  })

  // 排序
  ret = await Fruit.findAll({
    order: [['price', 'DESC']],
  })
  ret.forEach(fruit => {
    console.log(fruit.dataValues)
  })

// 聚合
  setTimeout(async () => {
    ret = await Fruit.max("price")
    console.log("max", ret)

    ret = await Fruit.sum("price")
    console.log("sum", ret)
  }, 500);

  // 更新 -- es5方式
  // 方式1
  Fruit.findOne({
    id: 1
  }).then(fruit => { 
    fruit.price = 2;
    fruit.save().then(()=>console.log('update!!!!')); 
  });
    
  // 方式2
  Fruit.update({price:2}, {where:{id:1}}).then(r => {
    console.log(r);
    console.log('update!!!!')
  })

  // 删除  -- es5方式
  // 方式1
  // Fruit.findOne({ where: { id: 1 } }).then(r => r.destroy())
  // 方式2
  // Fruit.destroy({ where: { id: 2 } }).then(r => console.log(r))
})()

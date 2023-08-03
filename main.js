const components = {
  action: [
    'Buy',
    'Invest in',
    'Transfer',
    'Donate',
    'Sell'
  ],
  item: [
    'a house',
    'a vehicle',
    'stocks',
    'bonds',
    'cash',
    'cryptocurrency',
    'foreign currency',
    'electronics',
    'an art collection',
    'precious metals',
    'a business',
    'intellectual property'
  ],
  timeframe: [
    'today',
    'tomorrow',
    'the day after tomorrow',
    'this week',
    'next week',
    'this month',
    'next month',
    'this quarter',
    'next quarter',
    'this year',
    'next year',
    'within 5 years',
    'within 10 years',
    'before you get married',
    'before you have children',
    'before you retire'
  ]
}

const message = {
  action: null,
  item: null,
  timeframe: null,
  format() {
    Object.keys(components).forEach((k) => {
      this[k] = components[k][Math.floor(Math.random() * components[k].length)]
    })
    return `${this.action} ${this.item} ${this.timeframe}`
  }
}

function main() {
  console.log(message.format())
}

main()
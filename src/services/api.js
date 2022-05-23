const ajax = new XMLHttpRequest()
ajax.open(
  'GET',
  'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
  true
)
ajax.send()

export default ajax

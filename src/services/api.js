const ajax = new XMLHttpRequest()
ajax.open(
  'GET',
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220412T181309Z&X-Amz-Expires=86400&X-Amz-Signature=594d273b79a217a150d0ae56012b0f91721b49196892cd439abb2f2c17cb96d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject',
  true
)
ajax.send()

export default ajax

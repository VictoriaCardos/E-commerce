const ajax = new XMLHttpRequest()
ajax.open(
  'GET',
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10792f77-3dd6-4ccd-bf4f-99967a8b1b87/products.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T205624Z&X-Amz-Expires=86400&X-Amz-Signature=b2fa0132fb9a84caa6291b5f6af5af82433cf423e0382dc97681bf7f971688a4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22products.json%22&x-id=GetObject',
  true
)
ajax.send()

export default ajax

//js中专门提供了一块能力 用于和html中的元素进行交互

//监听翻译按钮的点击事件
let translateBtn = document.getElementById('translateBtn')
translateBtn.addEventListener('click',function(){
   //获取用户输入的文本

    let inputText = document.getElementById('sourceText').value
    let targetLang = document.getElementById('targetLang').value
    console.log(inputText,targetLang)
  
    //将用户输入的文本inputText传输给大模型 ollama里面的deepseek(如何用代码链接)
    //请求同源的 /api/chat，由 server.js 转发到本机 Ollama，避免 CORS 和远程访问问题
    fetch('/api/chat',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            model:'deepseek-r1:1.5b',
            messages:[
                {role:'user', content:`你是一个专业的翻译，擅长将一种语言翻译成${targetLang}，只返回最简单的翻译结果，不带任何解释`},
                {role:'user', content:inputText}
            ],
            stream:false //是否开启流式输出
        })
    })
    .then(res => res.json())//将响应体转换为json格式
    .then((data) => {
        console.log(data.message.content)})
        //将翻译结果展示在页面上
        document.getElementById('empty').textContent = data.message.content
    })


layui.form.verify({
    pwd: [/^[\S]{6,12}$/, '必须6到12位，且不能出现空格'],
    repwd: function (value) {
        if (value !== $('[name=newPwd]').val()) {
            return "请确认密码是否一致"
        }
    }
})


//重置密码
//绑定提交事件
$('form').on('submit', function (e) {

    e.preventDefault()
    const params = $(this).serialize()
    $.ajax({
        url: "my/updatepwd",
        method: "post",
        data: params,
        success: (res) => {

            if (res.status == 0) {

                this.reset()
            }
            layer.msg(res.message)
        }

    })
})

let is = document.querySelectorAll('.layui-input-block i')


for (let i = 0, len = is.length; i < len; i++) {

    let flag = true
    is[i].onclick = (function () {
        return function () {
            if (flag) {
                this.className = 'iconfont  icon-visible1-copy'
                flag = false
            } else {
                this.className = 'iconfont  icon-no-visible'
                flag = true
            }
        }
    })()
}




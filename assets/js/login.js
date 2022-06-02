//1.切换面板
$('.tab a').on('click', function () {
    $('.login').toggle()
    $('.reg').toggle()

})
// 2.表单验证
//2.1声明校验规则
layui.form.verify({
    username: [/^[\S]{6,12}$/, '必须6到12位，且不能出现空格'],
    repwd: function (value) {
        if (value !== $('.pwd').val()) {
            return "请确认密码是否一致"
        }
    }
})

//绑定表单提交事件
$(".reg form").on('submit', function (e) {
    e.preventDefault()
    const params = $(this).serialize()

    $.ajax({
        type: "post",
        url: "api/reguser",
        data: params,

        success: (res) => {
            if (res.status == 0) {
                $('.reg a').click()
                this.reset()
            }
            layer.msg(res.message)
        }

    });

})


// 登陆界面
$(".login form").on('submit', function (e) {
    e.preventDefault()
    const params = $(this).serialize()

    $.ajax({
        type: "post",
        url: "api/login",
        data: params,

        success: (res) => {
            if (res.status == 0) {
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
                this.reset()
            }
            layer.msg(res.message)
        }

    });

})
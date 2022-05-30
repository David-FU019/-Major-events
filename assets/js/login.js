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
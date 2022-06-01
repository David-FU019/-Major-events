
function getUserInfo2() {
    $.ajax({
        url: "my/userinfo",
        success: function (res) {
            // console.log(res);
            //1.给form标签添加 拉有-filter 属性
            //2.调用 layui.form.val(lay-filter的值, 要赋值 的对象)
            layui.form.val('userinfo-form', res.data)

        }


    })

}
getUserInfo2()
//修改用户信息
//1.绑定表当的提交事件
$('form').on('submit', function (e) {

    e.preventDefault()
    const params = $(this).serialize()
    $.ajax({
        url: "my/userinfo",
        method: "post",
        data: params,
        success: function (res) {
            if (res.status == 0) {


                //成功
                //刷新欢迎文字
                //win.parent 指的是傅页面的window对象
                window.parent.getUserInfo()
            }

            layer.msg(res.message)
        }


    })

})

//重置 重新获取信息
$('.reset-btn').click(function () {
    //重新获取数据 并 渲染
    getUserInfo2()


})
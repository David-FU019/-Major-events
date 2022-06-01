//获取用户信息并绚烂
function getUserInfo() {

    $.ajax({

        url: "my/userinfo",

        success: function (res) {
            console.log(res);
            //判断获取是否成功
            if (res.status == 0) {
                //渲染头像 --看用户是否设置了头像
                if (res.data.user_pic !== null) {

                    $('.img-avatar').show().attr('src', res.data.user_pic)
                    $('.text-avatar').hide();
                } else {
                    $('.img-avatar').hide();
                    $('.text-avatar').show().html((res.data.nickname || res.data.username).charAt(0).toUpperCase())

                }
                //渲染欢迎文字
                $('.welcome span').html(res.data.nickname || res.data.username)
            }
        }
    });
}


getUserInfo()
$('.logout').on('click', function (index) {
    layer.confirm('是否退出确定', function () {

        localStorage.removeItem('token')
        location.href = "/login.html"
        layer.close(index)

    })


})
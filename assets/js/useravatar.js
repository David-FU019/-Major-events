//预览
const $image = $('.top .left img')

// $image.cropper({
//     aspectRatio: 1,
//     preview: '.preview-box'


// })
const option = {

    aspectRatio: 1,
    preview: '.preview-box'
}
$image.cropper(option)
//选择图片
$('.choose').click(function () {
    $('.file').click()

})

//更换图片
//1.绑定change
$('.file').on('change', function (e) {
    //2.
    //判断用户是否选择了文件
    if (this.files.length == 0) {
        //没选
        return
    }
    //3.获取文件
    const file = this.files[0]
    //4.更换图片
    //4.1 把图片对象转换成路径
    const path = URL.createObjectURL(file)//???


    $image
        //4.2销毁原来的剪裁区域
        .cropper('destroy')
        //4.3更换 图片
        .attr('src', path)
        //4.4 重新创建剪裁区域
        .cropper(option)
})

//上传图片
//1. 点击事件
$('.upload').click(function () {
    const img = $image
        //获取剪裁后的canvas对象

        .cropper('getCroppedCanvas', {
            width: 100,
            height: 100
        })
        .toDataURL('image/png')

    $.ajax({
        url: 'my/update/avatar',
        method: 'post',
        data: {
            avatar: img
        },
        success: function (res) {
            if (res.status == 0) {
                window.parent.getUserInfo()
            }
            layer.msg(res.message)
        }

    })

})
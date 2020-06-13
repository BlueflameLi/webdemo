//登陆界面切换注册界面
function change() {
    //添加div
    var txt = document.createElement("div");
    txt.className = "inputBox";
    $("form").prepend(txt);

    //添加邮箱输入框
    var txt2 = document.createElement("input");
    txt2.type = "text";//用email时会有点小bug，暂时使用text
    txt2.id = "email";
    txt2.name = "email";
    txt2.required = "true";
    $(".inputBox").eq(0).append(txt2);

    //添加输入框标题
    var txt3 = document.createElement("label");
    txt3.innerHTML = "邮箱";
    $(".inputBox").eq(0).append(txt3);

    //表单清空
    $("input").val("");

    //文字切换
    $(".inputBox2 label").html("已有账号？");
    $("#link").html("Login");

    //验证函数切换
    $("#link").attr("onclick", "change2()");
    $("#login").attr({
        "value": "注册",
        "onclick": "check2()"
    })

    //标题切换
    $("h2").html("用户注册");
}

//注册界面切换登陆界面
function change2() {
    //删除邮箱输入框
    $(".inputBox").eq(0).remove();

    //清空表单
    $("input").val("");

    //文字切换
    $(".inputBox2 label").html("没有账号？");
    $("#link").html("Register");

    //验证函数切换
    $("#link").attr("onclick", "change()");
    $("#login").attr({
        "value": "登陆",
        "onclick": "check()"
    });

    //标题切换
    $("h2").html("用户登陆");
}
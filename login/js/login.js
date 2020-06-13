//登陆提交验证
function check() {

    var use = document.getElementById("user")
    var pas = document.getElementById("pass")

    //用户名格式检查
    if (use.value.length > 16 || use.value.length < 6) {
        window.alert("用户名请输入6-16位字符");
        return;
    }
    else for (var i = 0; i < use.value.charCodeAt(i); i++) {
        if ((use.value.charCodeAt(i) < 48) || (use.value.charCodeAt(i) > 57) && (use.value.charCodeAt(i) < 97) || (use.value.charCodeAt(i) > 122)) {
            window.alert("用户名必须由字母和数字组成");
            return;
        }
    }

    //密码格式检查
    if (pas.value.length > 16 || pas.value.length < 6) {
        window.alert("密码请输入6-16位字符")
        return;
    }

    window.alert("登录成功")
}

//注册提交验证
function check2() {

    var email = document.getElementById("email")
    var use = document.getElementById("user")
    var pas = document.getElementById("pass")

    //邮箱格式检查
    var f1 = false;
    var f2 = false;
    for (var i = 0; i < email.value.charCodeAt(i); i++) {
        if ((email.value.charCodeAt(i) === 64)) {
            f1 = true;
        }
        else if ((email.value.charCodeAt(i) === 46)) {
            f2 = true;
        }
    }
    if (!f1 || !f2) {
        window.alert("邮箱格式不正确");
        return;
    }

    //用户名格式检查
    if (use.value.length > 16 || use.value.length < 6) {
        window.alert("用户名请输入6-16位字符");
        return;
    }
    else for (var i = 0; i < use.value.charCodeAt(i); i++) {
        if ((use.value.charCodeAt(i) < 48) || (use.value.charCodeAt(i) > 57) && (use.value.charCodeAt(i) < 97) || (use.value.charCodeAt(i) > 122)) {
            window.alert("用户名必须由字母和数字组成");
            return;
        }
    }

    //密码格式检查
    if (pas.value.length > 16 || pas.value.length < 6) {
        window.alert("密码请输入6-16位字符")
        return;
    }

    window.alert("注册成功")
}
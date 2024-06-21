function validateForm() {
  let form = document.getElementById("registrationForm");

  let loginName = form.loginName.value.trim();
  let username = form.username.value.trim();
  let password = form.password.value;
  let confirmPassword = form.confirmPassword.value;
  let phone = form.phone.value.trim();
  let email = form.email.value.trim();
  let address = form.address.value.trim();

  if (loginName.length < 5 || loginName.includes(" ")) {
    alert("登录名长度不能少于5个字符，且不能含空格。");
    form.loginName.focus();
    return;
  }

  if (username === "") {
    alert("用户名不能为空。");
    form.username.focus();
    return;
  }

  if (password.length < 6) {
    alert("密码不能少于6位。");
    form.password.focus();
    return;
  }

  if (password !== confirmPassword) {
    alert("两次输入的密码必须相同。");
    form.confirmPassword.focus();
    return;
  }

  if (!/^(13\d{9})$/.test(phone)) {
    alert("手机必须是11位数字，且前两位必须是13开头。");
    form.phone.focus();
    return;
  }

  if (!/^.{2,}@.{6,}\..+$/.test(email)) {
    alert("邮箱格式不正确，必须包含@字符，且@前不少于2位，@后不少于6位，且必须包含“.”字符。");
    form.email.focus();
    return;
  }

  alert(`注册信息:\n
    登录名: ${loginName}\n
    用户名: ${username}\n
    密码: ${password}\n
    手机: ${phone}\n
    邮箱: ${email}\n
    住址: ${address}`);
}

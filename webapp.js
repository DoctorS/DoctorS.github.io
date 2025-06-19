window.addEventListener('DOMContentLoaded', function () {
    var _a;
    Telegram.WebApp.ready();
    var user = (_a = Telegram.WebApp.initDataUnsafe) === null || _a === void 0 ? void 0 : _a.user;
    var userElem = document.getElementById('user');
    var closeBtn = document.getElementById('closeBtn');
    if (user && userElem) {
        userElem.textContent = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(user.first_name, "!");
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            Telegram.WebApp.close();
        });
    }
});

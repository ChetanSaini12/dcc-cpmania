export function checkLoginStatus() {
    const isLogin = sessionStorage.getItem('isLogin');
    return Boolean(isLogin);
}

export function setLogin()
{
    sessionStorage.setItem('isLogin', true);

}
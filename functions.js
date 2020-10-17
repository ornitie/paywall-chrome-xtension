function removeLogin() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('fusion-app').style.removeProperty('animation-duration')
    document.getElementById('fusion-app').style.removeProperty('animation-name')
    document.getElementById('fusion-app').style.removeProperty('animation-fill-mode')
}
export { removeLogin }
import { removeLogin } from './functions.js'

console.log(`Hello from your Chrome paywall extension!, we're at: ${window.location.hostname}`)
document.getElementsByTagName('html')[0].style.display = 'none';
window.onload = function () {
    removeLogin()
    document.getElementsByTagName('html')[0].style.display = 'block';
}
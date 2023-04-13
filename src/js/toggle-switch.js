const toggleSwitch = document.querySelector('#darkmode-toggle');
const body = document.querySelector('body');

const switchTheme = (e) => {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.classList.remove('theme-dark');
        localStorage.setItem('theme', 'light');
    }
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    toggleSwitch.checked = currentTheme === 'dark';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('theme-dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme);
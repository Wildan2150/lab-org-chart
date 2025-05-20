// App State
const appState = {
    darkMode: false,
    currentPosition: null,
    chartVisible: false,
    infoVisible: false
};



// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    // Load dark mode preference from localStorage
    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', function () {
        // Kembali ke tampilan awal
        document.getElementById('initial-section').classList.remove('hidden');
        document.querySelector('.org-chart').classList.add('hidden');
        document.getElementById('tupoksi-section').classList.add('hidden');
        document.getElementById('creator-info').classList.add('hidden');
        appState.chartVisible = false;
        appState.infoVisible = false;
        appState.currentPosition = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const savedDarkMode = localStorage.getItem('darkMode');
    appState.darkMode = savedDarkMode === 'true';
    const html = document.documentElement; // Tambahkan ini
    if (appState.darkMode) {
        html.classList.add('dark'); // Ganti dari document.body ke html
        document.getElementById('dark-icon').classList.add('hidden');
        document.getElementById('light-icon').classList.remove('hidden');
    } else {
        html.classList.remove('dark'); // Ganti dari document.body ke html
        document.getElementById('dark-icon').classList.remove('hidden');
        document.getElementById('light-icon').classList.add('hidden');
    }

    initDarkModeToggle();
    initInfoToggle();
    initShowChart();
            // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Duplicate button functionality for mobile
        document.getElementById('home-btn-mobile').addEventListener('click', () => {
            document.getElementById('home-btn').click();
        });
        document.getElementById('info-toggle-mobile').addEventListener('click', () => {
            document.getElementById('info-toggle').click();
        });
        document.getElementById('dark-mode-toggle-mobile').addEventListener('click', () => {
            document.getElementById('dark-mode-toggle').click();
        });
});

// Dark mode toggle
function initDarkModeToggle() {
    const toggle = document.getElementById('dark-mode-toggle');
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');
    const html = document.documentElement; // Tambahkan ini

    toggle.addEventListener('click', function () {
        appState.darkMode = !appState.darkMode;

        // Update UI
        html.classList.toggle('dark', appState.darkMode); // Ganti dari document.body ke html

        // Update icons
        if (appState.darkMode) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }

        // Save preference to localStorage
        localStorage.setItem('darkMode', appState.darkMode);
    });
}

// Info toggle
function initInfoToggle() {
    const toggle = document.getElementById('info-toggle');
    const creatorInfo = document.getElementById('creator-info');
    const orgChart = document.querySelector('.org-chart');
    const tupoksiSection = document.getElementById('tupoksi-section');
    const initialSection = document.getElementById('initial-section'); // tambahkan ini

    toggle.addEventListener('click', function () {
        appState.infoVisible = !appState.infoVisible;
        creatorInfo.classList.toggle('hidden', !appState.infoVisible);

        if (appState.infoVisible) {
            orgChart.classList.add('hidden');
            tupoksiSection.classList.add('hidden');
            initialSection.classList.add('hidden'); // tambahkan ini
            appState.currentPosition = null;
        } else if (appState.chartVisible) {
            orgChart.classList.remove('hidden');
        } else {
            initialSection.classList.remove('hidden'); // tambahkan ini agar kembali ke awal jika chart tidak aktif
        }

        window.scrollTo({ top: creatorInfo.offsetTop, behavior: 'smooth' });
    });
}

// Show chart button
function initShowChart() {
    const showChartButton = document.getElementById('show-chart');
    const initialSection = document.getElementById('initial-section');
    const orgChart = document.querySelector('.org-chart');
    document.getElementById('creator-info').classList.add('hidden');
    showChartButton.addEventListener('click', function () {
        appState.chartVisible = true;
        orgChart.classList.remove('hidden');
        initialSection.classList.add('hidden');
        document.getElementById('creator-info').classList.add('hidden');
    });
}

// Show tupoksi
function showTupoksi(positionId) {
    appState.currentPosition = positionId;
    const positionData = tupoksiData[positionId];
    if (!positionData) return;

    const orgChart = document.querySelector('.org-chart');
    const tupoksiSection = document.getElementById('tupoksi-section');
    const creatorInfo = document.getElementById('creator-info');
    orgChart.classList.add('hidden');
    tupoksiSection.classList.remove('hidden');
    creatorInfo.classList.add('hidden');
    appState.infoVisible = false;
    document.getElementById('tupoksi-title').textContent = `Tugas Pokok dan Fungsi ${positionData.title}`;
    document.getElementById('tupoksi-content').innerHTML = positionData.content;

    // Tambahkan animasi fade-in setiap kali muncul
    tupoksiSection.classList.remove('fade-in');
    void tupoksiSection.offsetWidth; // trigger reflow
    tupoksiSection.classList.add('fade-in');

    window.scrollTo({ top: tupoksiSection.offsetTop, behavior: 'smooth' });
}

// Hide tupoksi
function hideTupoksi() {
    const orgChart = document.querySelector('.org-chart');
    const tupoksiSection = document.getElementById('tupoksi-section');
    const creatorInfo = document.getElementById('creator-info');
    tupoksiSection.classList.add('hidden');
    creatorInfo.classList.add('hidden');
    appState.infoVisible = false;
    appState.currentPosition = null;

    if (appState.chartVisible) {
        orgChart.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

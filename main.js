// App State
const appState = {
    darkMode: false,
    currentPosition: null,
    chartVisible: false,
    infoVisible: false,
    isEditing: false
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
    const html = document.documentElement;
    if (appState.darkMode) {
        html.classList.add('dark');
        document.getElementById('dark-icon').classList.add('hidden');
        document.getElementById('light-icon').classList.remove('hidden');
    } else {
        html.classList.remove('dark');
        document.getElementById('dark-icon').classList.remove('hidden');
        document.getElementById('light-icon').classList.add('hidden');
    }

    initDarkModeToggle();
    initInfoToggle();
    initShowChart();
    loadTupoksiData();

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
    const html = document.documentElement;

    toggle.addEventListener('click', function () {
        appState.darkMode = !appState.darkMode;
        html.classList.toggle('dark', appState.darkMode);

        if (appState.darkMode) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }

        localStorage.setItem('darkMode', appState.darkMode);
    });
}

// Info toggle
function initInfoToggle() {
    const toggle = document.getElementById('info-toggle');
    const creatorInfo = document.getElementById('creator-info');
    const orgChart = document.querySelector('.org-chart');
    const tupoksiSection = document.getElementById('tupoksi-section');
    const initialSection = document.getElementById('initial-section');

    toggle.addEventListener('click', function () {
        appState.infoVisible = !appState.infoVisible;
        creatorInfo.classList.toggle('hidden', !appState.infoVisible);

        if (appState.infoVisible) {
            orgChart.classList.add('hidden');
            tupoksiSection.classList.add('hidden');
            initialSection.classList.add('hidden');
            appState.currentPosition = null;
        } else if (appState.chartVisible) {
            orgChart.classList.remove('hidden');
        } else {
            initialSection.classList.remove('hidden');
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

// Tupoksi Data Management
function loadTupoksiData() {
    const savedData = localStorage.getItem('tupoksiData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.assign(window.tupoksiData, parsedData);
    }
}

function saveTupoksiData(position, newData) {
    window.tupoksiData[position] = newData;
    localStorage.setItem('tupoksiData', JSON.stringify(window.tupoksiData));
}

function exportTupoksiData() {
    const dataStr = `const tupoksiData = ${JSON.stringify(window.tupoksiData, null, 2)};`;
    const blob = new Blob([dataStr], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tupoksi.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Show tupoksi
function showTupoksi(positionId) {
    appState.currentPosition = positionId;
    const positionData = window.tupoksiData[positionId];
    if (!positionData) return;

    const orgChart = document.querySelector('.org-chart');
    const tupoksiSection = document.getElementById('tupoksi-section');
    const creatorInfo = document.getElementById('creator-info');
    orgChart.classList.add('hidden');
    tupoksiSection.classList.remove('hidden');
    creatorInfo.classList.add('hidden');
    appState.infoVisible = false;

    const content = positionData.content;
    document.getElementById('tupoksi-title').textContent = `Tugas Pokok dan Fungsi ${positionData.title}`;
    document.getElementById('tupoksi-content').innerHTML = content;

    if (isAdmin()) {
        addEditButton(positionId, content);
    }

    tupoksiSection.classList.remove('fade-in');
    void tupoksiSection.offsetWidth;
    tupoksiSection.classList.add('fade-in');

    window.scrollTo({ top: tupoksiSection.offsetTop, behavior: 'smooth' });
}

function isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
}

function addEditButton(positionId, content) {
    const tupoksiContent = document.getElementById('tupoksi-content');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition';
    editButton.onclick = () => showEditForm(positionId, content);
    tupoksiContent.appendChild(editButton);
}

function showEditForm(positionId, content) {
    const tupoksiContent = document.getElementById('tupoksi-content');
    const currentData = window.tupoksiData[positionId];
    
    const form = document.createElement('form');
    form.className = 'space-y-4 mt-4';
    form.innerHTML = `
        <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Judul</label>
            <input type="text" value="${currentData.title}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white" id="edit-title">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ikon</label>
            <input type="text" value="${currentData.icon}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white" id="edit-icon">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Konten</label>
            <textarea class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white h-64" id="edit-content">${content}</textarea>
        </div>
        <div class="flex space-x-4">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Simpan</button>
            <button type="button" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition" id="cancel-edit">Batal</button>
            <button type="button" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition" id="export-data">Export Data</button>
        </div>
    `;

    form.onsubmit = (e) => {
        e.preventDefault();
        const newData = {
            title: document.getElementById('edit-title').value,
            icon: document.getElementById('edit-icon').value,
            content: document.getElementById('edit-content').value
        };
        saveTupoksiData(positionId, newData);
        showTupoksi(positionId);
    };

    tupoksiContent.innerHTML = '';
    tupoksiContent.appendChild(form);

    document.getElementById('cancel-edit').onclick = () => showTupoksi(positionId);
    document.getElementById('export-data').onclick = exportTupoksiData;
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
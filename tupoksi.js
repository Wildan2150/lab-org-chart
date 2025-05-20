// Tupoksi Data
const tupoksiData = {
    'kepala-sekolah': {
        title: 'Kepala Sekolah',
        icon: '👨‍🏫',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">👨‍🏫</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Kepala Sekolah</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pimpinan tertinggi di sekolah</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Bertanggung jawab atas seluruh kegiatan sekolah termasuk laboratorium</li>
                            <li>Menetapkan kebijakan umum pengelolaan laboratorium</li>
                            <li>Mengawasi kinerja <span class="tupoksi-link" onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah</span> bidang sarana prasarana</li>
                            <li>Menyetujui anggaran pengadaan alat dan bahan laboratorium</li>
                            <li>Menandatangani laporan tahunan laboratorium</li>
                        </ul>
                    </div>
                `
    },
    'wakil-kepala': {
        title: 'Wakil Kepala Sekolah',
        icon: '👩‍🏫',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">👩‍🏫</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Wakil Kepala Sekolah</h3>
                            <p class="text-gray-600 dark:text-gray-400">Bidang Sarana Prasarana</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('kepala-sekolah')">Kepala Sekolah</span> dalam pengelolaan sarana prasarana</li>
                            <li>Mengkoordinasikan pengadaan alat dan bahan laboratorium</li>
                            <li>Memantau kondisi sarana laboratorium secara berkala</li>
                            <li>Menyusun laporan kebutuhan laboratorium untuk <span class="tupoksi-link" onclick="showTupoksi('kepala-sekolah')">Kepala Sekolah</span></li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Lab IPA</span> untuk perencanaan pengembangan</li>
                        </ul>
                    </div>
                `
    },
    'koordinator-lab': {
        title: 'Koordinator Lab IPA',
        icon: '🧑‍🔬',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🧑‍🔬</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Koordinator Lab IPA</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pengelola Laboratorium</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengkoordinasikan seluruh kegiatan laboratorium IPA</li>
                            <li>Bertanggung jawab kepada <span class="tupoksi-link" onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah</span> bidang sarana prasarana</li>
                            <li>Membuat perencanaan pengembangan laboratorium</li>
                            <li>Mengawasi kinerja <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">Penanggung Jawab Lab Fisika</span>, <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">Kimia</span>, dan <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">Biologi</span></li>
                            <li>Menyusun jadwal penggunaan laboratorium bersama <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">guru mata pelajaran</span></li>
                        </ul>
                    </div>
                `
    },
    'pj-fisika': {
        title: 'Penanggung Jawab Lab Fisika',
        icon: '📐',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">📐</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Penanggung Jawab Lab Fisika</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengawasi kegiatan praktikum Fisika</li>
                            <li>Mengatur penggunaan alat bersama <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span></li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('teknisi-fisika')">Teknisi Lab Fisika</span></li>
                        </ul>
                    </div>
                `
    },
    'pj-kimia': {
        title: 'Penanggung Jawab Lab Kimia',
        icon: '⚗️',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">⚗️</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Penanggung Jawab Lab Kimia</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengawasi operasional lab kimia harian</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">Guru Kimia</span> dan <span class="tupoksi-link" onclick="showTupoksi('teknisi-kimia')">Teknisi Lab Kimia</span></li>
                            <li>Melaporkan kegiatan kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Lab IPA</span></li>
                        </ul>
                    </div>
                `
    },
    'pj-biologi': {
        title: 'Penanggung Jawab Lab Biologi',
        icon: '🧬',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🧬</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Penanggung Jawab Lab Biologi</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Memastikan kegiatan lab biologi berjalan baik</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span> dan <span class="tupoksi-link" onclick="showTupoksi('teknisi-biologi')">Teknisi Lab Biologi</span></li>
                            <li>Menyusun laporan kegiatan lab biologi</li>
                        </ul>
                    </div>
                `
    },
    'guru-fisika': {
        title: 'Guru Fisika',
        icon: '⚛️',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">⚛️</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Guru Fisika</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pengguna Laboratorium</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">koordinator lab</span></li>
                            <li>Mengajukan kebutuhan alat praktikum ke <span class="tupoksi-link" onclick="showTupoksi('laboran')">laboran</span></li>
                            <li>Melaporkan kerusakan alat saat praktikum ke <span class="tupoksi-link" onclick="showTupoksi('teknisi-fisika')">teknisi</span></li>
                            <li>Memastikan siswa menggunakan alat dengan benar</li>
                            <li>Mengembalikan alat setelah praktikum ke <span class="tupoksi-link" onclick="showTupoksi('laboran')">laboran</span></li>
                        </ul>
                    </div>
                `
    },
    'guru-kimia': {
        title: 'Guru Kimia',
        icon: '🧪',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🧪</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Guru Kimia</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pengguna Laboratorium</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">koordinator lab</span></li>
                            <li>Mengajukan kebutuhan bahan praktikum ke <span class="tupoksi-link" onclick="showTupoksi('laboran')">laboran</span></li>
                            <li>Melaporkan kerusakan alat saat praktikum ke <span class="tupoksi-link" onclick="showTupoksi('teknisi-kimia')">teknisi</span></li>
                            <li>Bertanggung jawab atas keselamatan siswa selama praktikum</li>
                            <li>Mengembalikan alat dan bahan setelah praktikum ke <span class="tupoksi-link" onclick="showTupoksi('laboran')">laboran</span></li>
                        </ul>
                    </div>
                `
    },
    'guru-biologi': {
        title: 'Guru Biologi',
        icon: '🌿',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🌿</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Guru Biologi</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pengguna Laboratorium</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">koordinator lab</span></li>
                            <li>Mengajukan kebutuhan spesimen dan bahan ke <span class="tupoksi-link" onclick="showTupoksi('laboran')">laboran</span></li>
                            <li>Melaporkan kerusakan mikroskop atau alat lain ke <span class="tupoksi-link" onclick="showTupoksi('teknisi-biologi')">teknisi</span></li>
                            <li>Mengawasi penggunaan bahan biologis oleh siswa</li>
                            <li>Memastikan kebersihan alat setelah praktikum</li>
                        </ul>
                    </div>
                `
    },
    'waka-kurikulum': {
        title: 'Wakil Kepala Sekolah Bidang Kurikulum',
        icon: '📘',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">📘</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Wakil Kepala Sekolah</h3>
                            <p class="text-gray-600 dark:text-gray-400">Bidang Kurikulum</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Lab IPA</span> dalam penyusunan jadwal praktikum</li>
                            <li>Memastikan kegiatan laboratorium sesuai kurikulum</li>
                            <li>Menyusun kebijakan kurikulum praktikum bersama <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">guru mata pelajaran</span></li>
                        </ul>
                    </div>
                `
    },
    'teknisi-fisika': {
        title: 'Teknisi Lab Fisika',
        icon: '🔧',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🔧</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Teknisi Lab Fisika</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Merawat dan memperbaiki alat-alat Fisika</li>
                            <li>Melaporkan alat rusak ke <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">Penanggung Jawab Lab Fisika</span></li>
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span> menyiapkan alat</li>
                        </ul>
                    </div>
                `
    },
    'teknisi-kimia': {
        title: 'Teknisi Lab Kimia',
        icon: '🧪',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🧪</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Teknisi Lab Kimia</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Menyiapkan larutan kimia dan alat praktikum</li>
                            <li>Menangani kerusakan alat dan kalibrasi</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">Penanggung Jawab Lab Kimia</span></li>
                        </ul>
                    </div>
                `
    },
    'teknisi-biologi': {
        title: 'Teknisi Lab Biologi',
        icon: '🧫',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">🧫</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Teknisi Lab Biologi</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mempersiapkan spesimen dan alat biologi</li>
                            <li>Melaporkan kebutuhan alat dan bahan</li>
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span> saat praktikum</li>
                        </ul>
                    </div>
                `
    },
    'laboran': {
        title: 'Laboran',
        icon: '👩‍💼',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">👩‍💼</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Laboran</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pelaksana Administrasi</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengelola administrasi laboratorium (inventaris, peminjaman)</li>
                            <li>Mencatat keluar masuknya alat dan bahan laboratorium</li>
                            <li>Melaporkan kerusakan alat ke <span class="tupoksi-link" onclick="showTupoksi('teknisi-fisika')">teknisi lab</span> atau <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">penanggung jawab</span></li>
                            <li>Menyiapkan bahan praktikum sesuai permintaan <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">guru</span></li>
                            <li>Membuat laporan bulanan ke <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">penanggung jawab</span></li>
                        </ul>
                    </div>
                `
    }
};
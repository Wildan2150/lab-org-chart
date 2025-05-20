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
                            <li>Menetapkan kebijakan umum terkait pengelolaan laboratorium sekolah</li>
                            <li>Menerima laporan kegiatan laboratorium dari <span class="tupoksi-link" onclick="showTupoksi('waka-kurikulum')">Wakil Kepala Sekolah Bidang Kurikulum</span> dan <span class="tupoksi-link" onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah Bidang Sarana dan Prasarana</span></li>
                            <li>Memberikan persetujuan akhir terhadap perencanaan, evaluasi, dan pengembangan laboratorium</li>
                            <li>Mengawasi pelaksanaan kegiatan laboratorium melalui laporan dari <span class="tupoksi-link" onclick="showTupoksi('waka-kurikulum')">Wakil Kepala Sekolah Bidang Kurikulum</span> dan <span class="tupoksi-link" onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah Bidang Sarana dan Prasarana</span></li>
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
                            <li>Menyusun, mengembangkan, dan mengevaluasi kurikulum termasuk integrasi kegiatan laboratorium</li>
                            <li>Mengawasi keterpaduan kegiatan laboratorium dengan kurikulum pembelajaran</li>
                            <li>Menyampaikan kebijakan teknis kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Menerima laporan kegiatan pembelajaran dari <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Melaporkan perkembangan dan kendala kepada <span class="tupoksi-link" onclick="showTupoksi('kepala-sekolah')">Kepala Sekolah</span></li>
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
                            <li>Bertanggung jawab atas operasional harian laboratorium</li>
                            <li>Melaporkan kegiatan laboratorium kepada <span class="tupoksi-link"
                                onclick="showTupoksi('kepala-sekolah')">Kepala Sekolah</span></li>
                            <li>Memastikan kesiapan alat dan bahan untuk praktikum</li>
                            <li>Mengevaluasi kebutuhan perbaikan alat dan melaporkan ke <span class="tupoksi-link"
                                onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah</span> bidang sarana prasarana</li>
                            <li>Membuat perencanaan pengembangan laboratorium dengan <span class="tupoksi-link" onclick="showTupoksi('wakil-kepala')">Wakil Kepala Sekolah</span> bidang sarana prasarana</li>
                            <li>Mengawasi kinerja <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">Penanggung Jawab Lab. Fisika</span>, <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">Penanggung Jawab Lab. Kimia</span>, dan <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">Penanggung Jawab Lab. Biologi</span></li>
                            <li>Menyusun jadwal penggunaan laboratorium bersama <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">Penanggung Jawab Lab. Fisika</span>, <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">Penanggung Jawab Lab. Kimia</span>, dan <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">Penanggung Jawab Lab. Biologi</span></li>
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
                           <li>Melaksanakan kegiatan praktikum Fisika sesuai kurikulum</li>
                            <li>Mengkoordinasikan alat dan bahan Fisika bersama <span class="tupoksi-link" onclick="showTupoksi('teknisi-fisika')">Teknisi Fisika</span>, <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span>, dan <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span></li>
                            <li>Melaporkan kebutuhan dan kegiatan Fisika kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Melaksanakan evaluasi praktikum Fisika</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span> dalam pelaksanaan praktikum</li>                     
                        </ul>
                    </div>
                `
    },
    'pj-kimia': {
        title: 'Penanggung Jawab Lab Kimia',
        icon: '⚗',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">⚗</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Penanggung Jawab Lab Kimia</h3>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Melaksanakan kegiatan praktikum Kimia sesuai kurikulum</li>
                            <li>Mengkoordinasikan alat dan bahan Kimia bersama <span class="tupoksi-link" onclick="showTupoksi('teknisi-kimia')">Teknisi Kimia</span>, <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">Guru Kimia</span>, dan <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span></li>
                            <li>Melaporkan kebutuhan dan kegiatan Kimia kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Melaksanakan evaluasi praktikum Kimia</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">Guru Kimia</span> dalam pelaksanaan praktikum</li>
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
                             <li>Melaksanakan kegiatan praktikum Biologi sesuai kurikulum</li>
                            <li>Mengkoordinasikan alat dan bahan Biologi bersama <span class="tupoksi-link" onclick="showTupoksi('teknisi-biologi')">Teknisi Biologi</span>, <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span>, dan <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span></li>
                            <li>Melaporkan kebutuhan dan kegiatan Biologi kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Melaksanakan evaluasi praktikum Biologi</li>
                            <li>Berkoordinasi dengan <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span> dalam pelaksanaan praktikum</li>

                        </ul>
                    </div>
                `
    },
    'guru-fisika': {
        title: 'Guru Fisika',
        icon: '⚛',
        content: `
                    <div class="flex items-center mb-4">
                        <div class="text-4xl mr-4">⚛</div>
                        <div>
                            <h3 class="text-xl font-bold dark:text-white">Guru Fisika</h3>
                            <p class="text-gray-600 dark:text-gray-400">Pengguna Laboratorium</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-bold text-lg dark:text-white">Tugas Pokok dan Fungsi:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">PJ Lab.Fisika</span></li>
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
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')"> PJ Lab. Kimia</span></li>
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
                            <li>Mengajukan jadwal penggunaan lab ke <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">PJ Lab. Biologi</span></li>
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
                            <li>Menyusun, mengembangkan, dan mengevaluasi kurikulum termasuk integrasi kegiatan laboratorium</li>
                            <li>Mengawasi keterpaduan kegiatan laboratorium dengan kurikulum pembelajaran</li>
                            <li>Menyampaikan kebijakan teknis kepada <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Menerima laporan kegiatan pembelajaran dari <span class="tupoksi-link" onclick="showTupoksi('koordinator-lab')">Koordinator Laboratorium IPA</span></li>
                            <li>Melaporkan perkembangan dan kendala kepada <span class="tupoksi-link" onclick="showTupoksi('kepala-sekolah')">Kepala Sekolah</span></li>
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
                            <li>Menyiapkan alat-alat percobaan Fisika berdasarkan laporan dari <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span></li>
                            <li>Melakukan kalibrasi dan pemeriksaan alat ukur Fisika secara berkala</li>
                            <li>Melaporkan kerusakan alat Fisika ke <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">PJ Fisika</span></li>
                            <li>Mendampingi <span class="tupoksi-link" onclick="showTupoksi('guru-fisika')">Guru Fisika</span> saat praktikum</li>
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span> dalam penataan alat Fisika</li>
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
                           <li>Menyiapkan alat-alat percobaan Kimia berdasarkan laporan dari <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">Guru Kimia</span></li>
                            <li>Melakukan kalibrasi dan pemeriksaan alat ukur Kimia secara berkala</li>
                            <li>Melaporkan kerusakan alat Kimia ke <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">PJ Kimia</span></li>
                            <li>Mendampingi <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">Guru Kimia</span> saat praktikum</li>
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span> dalam penataan alat Kimia</li>
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
                           <li>Menyiapkan alat-alat percobaan Biologi berdasarkan laporan dari <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span></li>
                            <li>Melakukan kalibrasi dan pemeriksaan alat ukur Biologi secara berkala</li>
                            <li>Melaporkan kerusakan alat Biologi ke <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">PJ Biologi</span></li>
                            <li>Mendampingi <span class="tupoksi-link" onclick="showTupoksi('guru-biologi')">Guru Biologi</span> saat praktikum</li>
                            <li>Membantu <span class="tupoksi-link" onclick="showTupoksi('laboran')">Laboran</span> dalam penataan alat Biologi</li>
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
                            <li>Melaporkan kerusakan alat ke <span class="tupoksi-link" onclick="showTupoksi('teknisi-fisika')">teknisi Lab. Fisika</span>,  <span class="tupoksi-link" onclick="showTupoksi('teknisi-kimia')">teknisi Lab. kimia</span> , dan  <span class="tupoksi-link" onclick="showTupoksi('teknisi-biologi')">teknisi Lab. Biologi</span></li>
                            <li>Menyiapkan bahan praktikum sesuai permintaan <span class="tupoksi-link" onclick="showTupoksi('guru-kimia')">guru</span></li>
                            <li>Membuat laporan bulanan ke <span class="tupoksi-link" onclick="showTupoksi('pj-fisika')">PJ. Lab. Fisika</span>,  <span class="tupoksi-link" onclick="showTupoksi('pj-kimia')">PJ. Lab. kimia</span> , dan  <span class="tupoksi-link" onclick="showTupoksi('pj-biologi')">PJ. Lab. Biologi</span></li>
                        </ul>
                    </div>
                `
    }
};

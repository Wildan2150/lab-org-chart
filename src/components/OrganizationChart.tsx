import React from 'react';
import { TupoksiPosition } from '../data/tupoksiData';

interface OrganizationChartProps {
  onNodeClick: (positionId: TupoksiPosition) => void;
}

export const OrganizationChart: React.FC<OrganizationChartProps> = ({ onNodeClick }) => {
  return (
    <div className="org-chart mt-2 fade-in max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 dark:text-gray-100 text-center mb-8">
        Struktur Organisasi Laboratorium SMA
      </h1>
      
      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.89 400.69">
        <defs>
          <style>
            {`
            .cls-1 {
              fill: none;
              stroke: #3b82f6;
              stroke-miterlimit: 10;
            }
            .cls-2 {
              fill: #2563eb;
            }
            .cls-9, .cls-10 {
              fill: #fff;
              font-family: 'Roboto', sans-serif;
            }
            .cls-9 {
              font-size: 10px;
            }
            .cls-10 {
              font-size: 12px;
              font-weight: 600;
            }
            .dark .cls-1 {
              stroke: #60a5fa;
            }
            .dark .cls-9, .dark .cls-10 {
              fill: #e2e8f0;
            }
            `}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <rect className="cls-1" x="142.12" y="56.37" width="201.01" height="75.93" />
          <line className="cls-1" x1="243.17" y1="37.5" x2="243.17" y2="226.89" />

          <g onClick={() => onNodeClick('kepala-sekolah')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="190.17" y=".5" width="106" height="37" rx="4.45" ry="4.45" />
            <text className="cls-10" transform="translate(201.31 22.28)">Kepala Sekolah</text>
          </g>

          <g onClick={() => onNodeClick('waka-kurikulum')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="82.85" y="74.33" width="130.91" height="37" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(99.99 89.54)">Wakil Kepala Sekolah<tspan x="8.2" y="12">Bidang Kurikulum</tspan></text>
          </g>

          <g onClick={() => onNodeClick('wakil-kepala')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="277.91" y="73.07" width="130.91" height="37" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(295.05 88.28)">Wakil Kepala Sekolah<tspan x="-8.39" y="12">Bidang Sarana Prasarana</tspan></text>
          </g>

          <g onClick={() => onNodeClick('koordinator-lab')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="170.75" y="151.03" width="144.84" height="37" rx="4.45" ry="4.45" />
            <text className="cls-10" transform="translate(187.35 172.81)">Koordinator Lab IPA</text>
          </g>

          <g onClick={() => onNodeClick('pj-fisika')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x=".5" y="226.89" width="130" height="37" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(18.5 243.09) scale(1.06 1)">Penanggung Jawab<tspan x="-.67" y="12">Laboratorium Fisika</tspan></text>
          </g>

          <g onClick={() => onNodeClick('pj-kimia')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="179.1" y="226.89" width="130" height="37" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(199.63 243.09)">Penanggung Jawab<tspan x="-.15" y="12">Laboratorium Kimia</tspan></text>
          </g>

          <g onClick={() => onNodeClick('pj-biologi')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="357.7" y="226.89" width="130" height="37" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(378.35 242.1)">Penanggung Jawab<tspan x="-3.08" y="12">Laboratorium Biologi</tspan></text>
          </g>

          <g onClick={() => onNodeClick('guru-fisika')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="52.1" y="287.04" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(77.94 304.25)">Guru Fisika</text>
          </g>

          <g onClick={() => onNodeClick('laboran')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="52.1" y="373.19" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(70.6 390.39)">Laboran Fisika</text>
          </g>

          <g onClick={() => onNodeClick('teknisi-fisika')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="52.1" y="330.11" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(61.42 347.32)">Teknisi Lab. Fisika</text>
          </g>

          <g onClick={() => onNodeClick('guru-kimia')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="228.7" y="287.04" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(255.06 304.25)">Guru Kimia</text>
          </g>

          <g onClick={() => onNodeClick('laboran')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="228.7" y="373.19" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(247.72 390.39)">Laboran Kimia</text>
          </g>

          <g onClick={() => onNodeClick('teknisi-kimia')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="228.7" y="330.31" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(238.55 347.52)">Teknisi Lab. Kimia</text>
          </g>

          <g onClick={() => onNodeClick('guru-biologi')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="405.31" y="287.04" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(431.14 304.25)">Guru Biologi</text>
          </g>

          <g onClick={() => onNodeClick('laboran')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="405.31" y="373.19" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(421.39 390.39)">Laboran Biologi</text>
          </g>

          <g onClick={() => onNodeClick('teknisi-biologi')} style={{ cursor: 'pointer' }}>
            <rect className="cls-2" x="405.31" y="329.52" width="103.09" height="27.01" rx="4.45" ry="4.45" />
            <text className="cls-9" transform="translate(412.22 346.73)">Teknisi Lab. Biologi</text>
          </g>

          <line className="cls-1" x1="65.5" y1="205.61" x2="424.34" y2="205.61" />
          <line className="cls-1" x1="65.5" y1="226.89" x2="65.5" y2="205.61" />
          <line className="cls-1" x1="424.34" y1="226.89" x2="424.34" y2="205.61" />
          <line className="cls-1" x1="26.26" y1="263.89" x2="26.26" y2="386.69" />
          <line className="cls-1" x1="202.87" y1="263.89" x2="202.87" y2="386.69" />
          <line className="cls-1" x1="378.89" y1="264.68" x2="378.89" y2="387.48" />
          <line className="cls-1" x1="26.26" y1="298.97" x2="52.1" y2="298.97" />
          <line className="cls-1" x1="26.26" y1="343.03" x2="52.1" y2="343.03" />
          <line className="cls-1" x1="26.26" y1="386.69" x2="52.1" y2="386.69" />
          <line className="cls-1" x1="202.87" y1="299.17" x2="228.7" y2="299.17" />
          <line className="cls-1" x1="202.87" y1="343.23" x2="228.7" y2="343.23" />
          <line className="cls-1" x1="202.87" y1="386.89" x2="228.7" y2="386.89" />
          <line className="cls-1" x1="378.89" y1="299.76" x2="404.73" y2="299.76" />
          <line className="cls-1" x1="378.89" y1="343.82" x2="404.73" y2="343.82" />
          <line className="cls-1" x1="378.89" y1="387.48" x2="404.73" y2="387.48" />
        </g>
      </svg>
      
      <div className="text-center text-gray-400 dark:text-gray-300 mt-6">
        <p className="animate-pulse">Klik pada posisi untuk melihat tugas pokok dan fungsi</p>
      </div>
    </div>
  );
};
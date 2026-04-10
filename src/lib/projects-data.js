export const projects = [
  {
    id: 1,
    title: '효봉기업',
    description: '기업 철학과 사업 영역을 직관적으로 전달하는 기업 소개 웹사이트. 다양한 디바이스 환경에서도 완성도 높은 레이아웃을 유지하도록 구현했습니다.',
    period: '2026.03 – 진행중',
    features: ['반응형 레이아웃', '슬라이드 배너', '크로스브라우저 대응'],
    implementation_points: [
      { label: '반응형 Breakpoint', desc: 'Mobile 360px / Tablet 768px / Desktop 1280px 3단계 분기 — 레이아웃 붕괴 없이 완성도 유지' },
      { label: '햄버거 메뉴 애니메이션', desc: 'CSS transition으로 슬라이드 인/아웃 구현 — JS 라이브러리 없이 순수 CSS만 사용' },
      { label: '배너 슬라이더', desc: '자동재생 + 터치 스와이프 직접 커스터마이징 — 기본 라이브러리 스타일 100% 오버라이드' },
      { label: '크로스브라우저 대응', desc: 'Chrome · Safari · Edge 실기기 렌더링 검수 — vendor prefix 및 fallback 스타일 적용' }
    ],
    role: '100% 개인 작업 (기획 · 디자인 · 퍼블리싱)',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    thumbnail_url: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fwww.hyobongkiup.com%2F?w=800',
    detail_url: 'https://www.hyobongkiup.com/',
    github_url: 'https://github.com/briyeo007/-Hyobong-Enterprise',
    is_featured: true,
    is_published: true,
    sort_order: 1
  },
  {
    id: 2,
    title: 'Furniture',
    description: '가구 쇼핑몰 웹사이트. 모바일 퍼스트 기준으로 제작하여 다양한 디바이스에서 최적화된 쇼핑 경험을 제공합니다.',
    period: '2025.11 – 2025.12',
    features: ['모바일 퍼스트', '상품 필터 인터랙션', 'hover 애니메이션'],
    role: '100% 개인 작업 (기획 · 디자인 · 퍼블리싱)',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    thumbnail_url: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ungjunliving.com%2F?w=800',
    detail_url: 'https://www.ungjunliving.com/',
    github_url: 'https://github.com/briyeo007/Furniture',
    is_published: true,
    sort_order: 2
  },
  {
    id: 3,
    title: 'Ungjun Ice Cream',
    description: '아이스크림 브랜드 웹사이트. 브랜드 아이덴티티를 반영한 감각적인 UI와 부드러운 스크롤 애니메이션을 구현했습니다.',
    period: '2025.08 – 2025.10',
    features: ['스크롤 애니메이션', '반응형 그리드', '접근성(a11y) 고려'],
    role: '100% 개인 작업 (기획 · 디자인 · 퍼블리싱)',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    thumbnail_url: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fungjunicecream.com%2F?w=800',
    detail_url: 'https://ungjunicecream.com/',
    github_url: 'https://github.com/briyeo007/icecream',
    is_published: true,
    sort_order: 3
  },
  {
    id: 4,
    title: 'SkillBridge',
    description: '두 번째 포트폴리오 사이트. 퍼블리셔 역량을 직접 보여주기 위해 다양한 인터랙션과 애니메이션 효과를 적용했습니다.',
    period: '2024.09 – 2024.10',
    features: ['CSS 애니메이션', '반응형 레이아웃', '다크 테마'],
    role: '100% 개인 작업 (기획 · 디자인 · 퍼블리싱)',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    thumbnail_url: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ungjunportfolio.com%2F?w=800',
    detail_url: 'https://www.ungjunportfolio.com/',
    github_url: 'https://github.com/briyeo007/Portfolio-2',
    is_published: true,
    sort_order: 4
  }
];

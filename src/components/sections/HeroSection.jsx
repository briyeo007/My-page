import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import FloatingLines from '../ui/FloatingLines';

/**
 * HeroSection 컴포넌트
 * 포트폴리오 메인 비주얼 섹션
 * FloatingLines WebGL 배경 효과 적용
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#1A1613',
        overflow: 'hidden'
      }}
    >
      {/* FloatingLines 배경 */}
      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[10, 15, 20]}
        lineDistance={[8, 6, 4]}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        linesGradient={['#D4A537', '#C9963A', '#A67C3D', '#8B6914']}
      />

      {/* 콘텐츠 */}
      <Container
        maxWidth="md"
        sx={{
          px: { xs: 2, md: 3 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 }
          }}
        >
          {/* 인사말 */}
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              letterSpacing: 4,
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              mb: 2,
              display: 'block',
              fontWeight: 600
            }}
          >
            Web Publisher Brian
          </Typography>

          {/* 이름 */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: '#3D3530',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2
            }}
          >
            Brian Ungjun Yeo
          </Typography>

          {/* 직함 */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: 'secondary.main',
              fontWeight: 500,
              mb: 3,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              letterSpacing: 1
            }}
          >
            Pixel-perfect &amp; Responsive Web Publishing
          </Typography>

          {/* 소개 */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: 600,
              mx: 'auto',
              mb: 2
            }}
          >
            모바일부터 데스크탑까지 완벽한 반응형 웹을 구현합니다.
            크로스브라우저 호환성과 웹 접근성을 고려한 퍼블리싱으로
            사용자 경험을 극대화합니다.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'secondary.main',
              mb: 5,
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              letterSpacing: 1,
              opacity: 0.85
            }}
          >
            Responsive Web &nbsp;/&nbsp; Cross-browser &nbsp;/&nbsp; Accessibility
          </Typography>

          {/* CTA 버튼들 */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              Contact
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* 스크롤 인디케이터 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid',
            borderColor: 'secondary.main',
            borderRadius: 15,
            position: 'relative',
            opacity: 0.6,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: 6,
              bgcolor: 'secondary.main',
              borderRadius: '50%',
              animation: 'scrollIndicator 2s infinite'
            },
            '@keyframes scrollIndicator': {
              '0%': { opacity: 1, top: 8 },
              '100%': { opacity: 0, top: 32 }
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;

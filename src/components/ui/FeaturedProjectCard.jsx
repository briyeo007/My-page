import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function FeaturedProjectCard({ title, description, period, features = [], implementation_points = [], role, techStack = [], thumbnailUrl, detailUrl, githubUrl }) {
  return (
    <Card
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'secondary.main',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 0 32px rgba(212, 165, 55, 0.15)',
        position: 'relative'
      }}
    >
      {/* 대표 프로젝트 뱃지 */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 2,
          bgcolor: 'secondary.main',
          color: '#1A1613',
          px: 1.5,
          py: 0.4,
          borderRadius: 1,
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: 1
        }}
      >
        FEATURED
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* 썸네일 */}
        <Box sx={{ width: { xs: '100%', md: '48%' }, flexShrink: 0 }}>
          <CardMedia
            component="img"
            image={thumbnailUrl}
            alt={`${title} thumbnail`}
            sx={{
              width: '100%',
              height: { xs: 220, md: '100%' },
              minHeight: { md: 360 },
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
        </Box>

        {/* 콘텐츠 */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            p: { xs: 3, md: 4 }
          }}
        >
          {/* 제목 + 기간 */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ color: 'secondary.main', fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            >
              {title}
            </Typography>
            {period && (
              <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.72rem', whiteSpace: 'nowrap', mt: 0.5 }}>
                {period}
              </Typography>
            )}
          </Box>

          {/* 설명 */}
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
            {description}
          </Typography>

          {/* 구현 포인트 */}
          {implementation_points.length > 0 && (
            <Box>
              <Typography
                variant="caption"
                sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 1 }}
              >
                구현 포인트
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                {implementation_points.map((point, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: '0.95rem', color: 'secondary.main', mt: '2px', flexShrink: 0 }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* 피처 태그 */}
          {features.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {features.map((f) => (
                <Chip
                  key={f}
                  label={f}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(212, 165, 55, 0.08)',
                    color: 'secondary.main',
                    border: '1px solid rgba(212, 165, 55, 0.3)',
                    fontSize: '0.7rem',
                    height: 22
                  }}
                />
              ))}
            </Box>
          )}

          {/* 역할 */}
          {role && (
            <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.72rem' }}>
              {role}
            </Typography>
          )}

          {/* 기술 스택 */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: 'background.default',
                  color: 'info.main',
                  border: '1px solid',
                  borderColor: 'info.main',
                  fontSize: '0.75rem'
                }}
              />
            ))}
          </Box>

          {/* 버튼 */}
          <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<OpenInNewIcon />}
              onClick={() => window.open(detailUrl, '_blank', 'noopener,noreferrer')}
              fullWidth
              sx={{ transition: 'all 0.2s ease', '&:active': { transform: 'scale(0.98)' } }}
            >
              View Project
            </Button>
            {githubUrl && (
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GitHubIcon />}
                onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
                fullWidth
                sx={{ transition: 'all 0.2s ease', '&:active': { transform: 'scale(0.98)' } }}
              >
                View Code
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default FeaturedProjectCard;

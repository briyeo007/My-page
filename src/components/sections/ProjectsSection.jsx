import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { projects } from '../../lib/projects-data';
import ProjectCard from '../ui/ProjectCard';

/**
 * ProjectsSection 컴포넌트
 * 홈페이지 내 대표 프로젝트 섹션 (정적 데이터 사용)
 */
function ProjectsSection() {
  const displayProjects = projects.slice(0, 3);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#2A2420',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}
        >
          Projects
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            maxWidth: 500,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6
          }}
        >
          다양한 기술 스택을 활용하여 만든 프로젝트들입니다.
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {displayProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 6 }}>
                <Box sx={{ height: 420 }}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.tech_stack}
                    thumbnailUrl={project.thumbnail_url}
                    detailUrl={project.detail_url}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 4, md: 6 }
          }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            color="secondary"
            size="large"
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

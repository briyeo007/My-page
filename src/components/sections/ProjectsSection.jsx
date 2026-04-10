import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { projects } from '../../lib/projects-data';
import ProjectCard from '../ui/ProjectCard';
import FeaturedProjectCard from '../ui/FeaturedProjectCard';

function ProjectsSection() {
  const displayProjects = projects.slice(0, 3);
  const featured = displayProjects.find((p) => p.is_featured);
  const rest = displayProjects.filter((p) => !p.is_featured);

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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
          {/* 대표 프로젝트 */}
          {featured && (
            <FeaturedProjectCard
              title={featured.title}
              description={featured.description}
              period={featured.period}
              features={featured.features}
              implementation_points={featured.implementation_points}
              role={featured.role}
              techStack={featured.tech_stack}
              thumbnailUrl={featured.thumbnail_url}
              detailUrl={featured.detail_url}
              githubUrl={featured.github_url}
            />
          )}

          {/* 나머지 프로젝트 */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {rest.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6 }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  period={project.period}
                  features={project.features}
                  role={project.role}
                  techStack={project.tech_stack}
                  thumbnailUrl={project.thumbnail_url}
                  detailUrl={project.detail_url}
                  githubUrl={project.github_url}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 6 } }}>
          <Button component={Link} to="/projects" variant="outlined" color="secondary" size="large">
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

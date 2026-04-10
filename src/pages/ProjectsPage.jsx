import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { projects } from '../lib/projects-data';
import ProjectCard from '../components/ui/ProjectCard';
import FeaturedProjectCard from '../components/ui/FeaturedProjectCard';

function ProjectsPage() {
  const featured = projects.find((p) => p.is_featured);
  const rest = projects.filter((p) => !p.is_featured);

  return (
    <Box sx={{ width: '100%', minHeight: 'calc(100vh - 64px)', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: 'secondary.main',
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 2, md: 3 },
            fontSize: { xs: '2rem', md: '3rem' }
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
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6
          }}
        >
          다양한 기술 스택을 활용하여 만든 프로젝트들입니다.
          각 프로젝트를 클릭하여 자세한 내용을 확인해보세요.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
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

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {rest.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 6 }}>
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
      </Container>
    </Box>
  );
}

export default ProjectsPage;

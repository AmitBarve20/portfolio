import styles from './ProjectsStyles.module.css';
import banking from '../../assets/banking_.png';
import musicapp from '../../assets/musicapp.webp';
import webiste from '../../assets/website.webp';
import crypto from '../../assets/crypto.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={banking}
          link="https://www.behance.net/gallery/211971595/IOS-Banking-Application-UI-design"
          h3="Cashflow"
          p="Digital Banking App"
        />
        <ProjectCard
          src={musicapp}
          link="https://www.figma.com/design/vWs5RYrpQYrlUQ2VnQVwjr/Music-App?node-id=0-1&t=nkHc3BWXG2N6Itvy-1"
          h3="Music app"
          p="Morden Bhakti"
        />
        <ProjectCard
          src={crypto}
          link="https://www.figma.com/design/3gFcwGHvbx1r5FY8ocNwng/dashboard?node-id=1-3578&t=0xqtXtrBTGAKqpVw-1"
          h3="Dashboard"
          p="Simply Manage Everything"
        />
        <ProjectCard
          src={webiste}
          link="https://www.figma.com/design/7Id9DgeSkeNJmpflEizKnw/landing-page?node-id=1-2469&t=QyBULgq11w9hYp8H-1"
          h3="Landing page"
          p="Buy drinks online"
        />
      </div>
    </section>
  );
}

export default Projects;

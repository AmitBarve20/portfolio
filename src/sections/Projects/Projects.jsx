import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/banking app.webp';
import musicapp from '../../assets/musicapp.webp';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.figma.com/design/ARfR0hx9dA0IoU5vD2nnfY/Banking-app?node-id=0-1&t=kWC0mSW2C7EwcRsO-1"
          h3="Cashflow"
          p="Digital Banking App"
        />
        <ProjectCard
          src={musicapp}
          link="https://www.figma.com/design/vWs5RYrpQYrlUQ2VnQVwjr/Music-App?node-id=0-1&t=nkHc3BWXG2N6Itvy-1"
          h3="Music app"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.figma.com/design/3gFcwGHvbx1r5FY8ocNwng/dashboard?node-id=1-3578&t=0xqtXtrBTGAKqpVw-1"
          h3="dashboard"
          p="Glasses Shop"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.figma.com/design/7Id9DgeSkeNJmpflEizKnw/landing-page?node-id=1-2469&t=QyBULgq11w9hYp8H-1"
          h3="landing page"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;

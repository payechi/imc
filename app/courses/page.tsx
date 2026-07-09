import '@/styles/responsive.css';
import CourseCard from '@/components/CourseCard';
import Banner from '@/components/Banner';
import coursesBanner from '@/images/courses.jpg';

export default function Courses() {
  const allCourses = [
    {
      image: '/images/1.jpg',
      title: 'Graphic Designing',
      description: 'Master Adobe Creative Suite - Photoshop, Illustrator, InDesign. Learn typography, color theory, UI/UX design, and create stunning visual designs.'
    },
    {
      image: '/images/2.jpg',
      title: '2D & 3D Animation',
      description: 'Learn animation principles, 3D modeling with Blender/Maya, character animation, rigging, rendering, and motion graphics for film and games.'
    },
    {
      image: '/images/3.jpg',
      imageClass: 'extra-radius',
      title: 'VFX',
      description: 'Master visual effects compositing, video editing, motion tracking, green screen techniques, and professional video production workflows.'
    },
    {
      image: '/images/4.jpg',
      title: 'DTP',
      description: 'Desktop Publishing: Learn InDesign, Corel Draw, layout design, pre-press preparation, and professional document design for print and digital.'
    },
    {
      image: '/images/5.jpg',
      imageClass: 'extra-radius',
      title: 'C & C++',
      description: 'Programming fundamentals, object-oriented concepts, data structures, algorithms, and advanced C/C++ programming for software development.'
    },
    {
      image: '/images/6.jpg',
      title: 'MS-OFFICE',
      description: 'Master Microsoft Office suite: Word, Excel, PowerPoint. Learn data analysis, automation, presentation design, and professional office skills.'
    },
    {
      image: '/images/7.jpg',
      title: 'Basics',
      description: 'Computer fundamentals: operating systems, hardware, networking basics, internet usage, and essential digital literacy skills for beginners.'
    },
    {
      image: '/images/8.jpg',      imageClass: 'extra-radius',      title: 'PGDCA',
      description: 'Post Graduate Diploma in Computer Applications: Comprehensive IT training covering advanced applications, networking, databases, and professional skills.'
    },
  ];

  return (
    <main>
      <Banner
        title=""
        image={coursesBanner}
        imageClassName="courses-banner-image"
      />
      {/* Courses Grid */}
      <section className="section">
        <div className="section-container">
          <h1 className="section-title">Our Courses</h1>
          <p className="section-subtitle">Explore our professional courses</p>
          <div className="grid grid-cols-3">
            {allCourses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
                imageClass={course.imageClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 32, 39, 0.5)' }}>
        <div className="section-container">
          <h2 className="section-title">What Comes With Every Course?</h2>
          
          <div className="grid grid-cols-4">
            <div className="card section-card">
              <div className="section-card-icon">📚</div>
              <h3 className="section-card-title">Live Classes</h3>
              <p className="section-card-text">Interactive live training sessions with experienced instructors and hands-on projects.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">💻</div>
              <h3 className="section-card-title">Online Classes</h3>
              <p className="section-card-text">Flexible online sessions for convenient learning from anywhere.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">🎓</div>
              <h3 className="section-card-title">Certification</h3>
              <p className="section-card-text">Industry-recognized certificates upon successful course completion.</p>
            </div>
            <div className="card section-card">
              <div className="section-card-icon">💼</div>
              <h3 className="section-card-title">Placement Assistance Support</h3>
              <p className="section-card-text">Dedicated placement assistance and job interview preparation for all students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="section">
        <div className="section-container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Start Your Learning Journey Today</h2>
            <p className="section-subtitle">
              Choose the course that fits your goals and let our team guide you through the next step.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

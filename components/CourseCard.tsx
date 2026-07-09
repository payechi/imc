import '@/styles/cards.css';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  imageClass?: string;
}

export default function CourseCard({ image, title, description, imageClass }: CourseCardProps) {
  return (
    <div className="card course-card">
      <div className={`course-card-image-wrapper ${imageClass ?? ''}`}>
        <img
          src={encodeURI(image)}
          alt={title}
          className="course-card-image"
        />
      </div>
      <h3 className="course-card-title">{title}</h3>
      <p className="course-card-description">{description}</p>
      <button className="course-card-button">Learn More</button>
    </div>
  );
}

import Image, { StaticImageData } from 'next/image';
import '@/styles/banner.css';

type BannerProps = {
  image: StaticImageData;
  title?: string;
  subtitle?: string;
  imageClassName?: string;
};

export default function Banner({ image, title, subtitle, imageClassName }: BannerProps) {
  return (
    <section className="page-banner">
      <Image
        src={image}
        alt={title || 'Page banner'}
        width={image.width}
        height={image.height}
        priority
        quality={80}
        sizes="100vw"
        className={['page-banner-image', imageClassName].filter(Boolean).join(' ')}
      />

      {title && (
        <div className="page-banner-overlay">
          <div className="page-banner-content">
            <h1 className="page-banner-title">{title}</h1>
            {subtitle ? <p className="page-banner-subtitle">{subtitle}</p> : null}
          </div>
        </div>
      )}
    </section>
  );
}

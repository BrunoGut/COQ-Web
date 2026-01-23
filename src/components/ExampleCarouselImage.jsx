export default function ExampleCarouselImage({ src, alt = '', text, className = '' }) {
  if (!src) {
    return (
      <div
        className={className}
        aria-label={alt || text || 'Imagen'}
        role="img"
      />
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt || text || ''}
      loading="lazy"
      decoding="async"
    />
  );
}

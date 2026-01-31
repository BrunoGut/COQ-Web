import "../css/bannerComponent.css";

export default function BannerComponent({
    title,
    urlImg,
    ariaLabel,
    ariaHidden,
    className = "",
    children,
}) {
    const backgroundStyle = urlImg
        ? {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${urlImg})`,
            }
        : undefined;

    const ariaProps = {};
    if (ariaHidden != null) ariaProps["aria-hidden"] = ariaHidden;
    else if (ariaLabel || title) ariaProps["aria-label"] = ariaLabel || title;

    return (
        <div className={`banner ${className}`.trim()} style={backgroundStyle} {...ariaProps}>
            <div className="banner__inner">
                {title ? <h3 className="banner__title">{title}</h3> : null}
                {children}
            </div>
        </div>
    );
}
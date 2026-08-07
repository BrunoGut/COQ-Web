import "../css/bannerComponent.css";

export default function BannerComponent({
    title,
    urlImg,
    ariaLabel,
    ariaHidden,
    className = "",
    children,
}) {
    const ariaProps = {};
    if (ariaHidden != null) ariaProps["aria-hidden"] = ariaHidden;
    else if (ariaLabel || title) ariaProps["aria-label"] = ariaLabel || title;

    return (
        <div className={`banner ${className}`.trim()} {...ariaProps}>
            {urlImg && (
                <>
                    <img
                        className="banner__img"
                        src={urlImg}
                        alt=""
                        fetchPriority="high"
                    />
                    <div className="banner__overlay" aria-hidden="true" />
                </>
            )}
            <div className="banner__inner">
                {title ? <h3 className="banner__title">{title}</h3> : null}
                {children}
            </div>
        </div>
    );
}
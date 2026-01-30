export default function BannerComponent(title, urlImg,  ariaHidden = true, className = '') {
    return (
        <div className={`banner ${className}`.trim()} aria-hidden={ariaHidden}>{title}
            <div className="banner_inner">
                <h3 className="banner_title">
                    {title}
                </h3>
            </div>
        </div>
    )
}
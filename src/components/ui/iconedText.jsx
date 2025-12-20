export default function IconedText({
  icon = "../../assets/icon-link.svg",
  title = "Title text",
  description = "Description goes here as long as it can contain",
  iconLeft = true,
  iconRight = false,
  showDescription = false,
  align = "left",
  titleWeight,
  className = "w-2xs",
  iconBg = "bg-white/10 h-10 min-w-10"
  
}) {
  
    const alignmentClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }[align];

  return (
    <div className={`flex gap-3.5 ${className}`}>
      
      {iconLeft && (
        <div className={`flex items-center justify-center rounded-full ${iconBg}`}>
          <img src={icon} alt="" />
        </div>
      )}

      
        <div className={`flex flex-col justify-center leading-snug ${alignmentClass}`}>
            <p className={`font-normal ${titleWeight}`}>{title}</p>
            {showDescription && (
            <p className="font-light text-white/60 text-sm">{description}</p>
            )}
        </div>
    
      {iconRight && (
        <div className={`flex items-center justify-center rounded-full ${iconBg}`}>
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
}

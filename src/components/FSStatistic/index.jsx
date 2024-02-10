import "./FSStatistic.css";

export const FSStatistic = ({
  isOnlyStatistics,
  isCardBlock,
  icon,
  iconWrapperClass,
  numbers,
  label,
}) => {
  return (
    <>
      {isOnlyStatistics && isOnlyStatistics === true ? <>
        <div className={`card fs-cmp-statistic-card ${isCardBlock && isCardBlock === true ? 'w-100' : ''}`}>
          <div className={`fs-cmp-statistic-icon-wrapper flex-center contain-image flex-auto-0 ${iconWrapperClass && iconWrapperClass ? iconWrapperClass : ''}`}>
            {icon}
          </div>
          <div className="fs-cmp-statistic-data-box">
            <div className="fs-cmp-statistic-number text-color-black">{numbers}</div>
            <div className="fs-cmp-statistic-label text-color-gray">{label}</div>
          </div>
        </div>
      </> :
        <><div className="fs-cmp-statistic-data-box">
          <div className="fs-cmp-statistic-number text-color-black">{numbers}</div>
          <div className="fs-cmp-statistic-label text-color-gray">{label}</div>
        </div>
        </>}
    </>
  )
}
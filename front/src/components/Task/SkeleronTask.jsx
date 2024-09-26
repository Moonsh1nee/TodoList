import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonTask = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={22}
    viewBox="0 0 260 22"
    backgroundColor="#6c757d"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="260" height="22" />
  </ContentLoader>
)

export default SkeletonTask
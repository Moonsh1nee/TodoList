import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonList = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={464}
    viewBox="0 0 260 464"
    backgroundColor="#b0b0b0"
    foregroundColor="#383838"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="260" height="24" /> 
    <rect x="0" y="54" rx="10" ry="10" width="112" height="25" /> 
    <rect x="0" y="109" rx="10" ry="10" width="260" height="355" />
  </ContentLoader>
)

export default SkeletonList


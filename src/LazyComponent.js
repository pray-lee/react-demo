import React, {Suspense} from "react";
const ReactLazy = React.lazy(() => import('./React_lazy'))

export default () => {
  return (
    // 一般用于加载动画
    <Suspense fallback={<div>Loading....</div>}>
        <ReactLazy/>
    </Suspense>
  )
}
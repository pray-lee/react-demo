import React from 'react'

// 高阶组件是参数为组件，返回值为新组件的函数
// const EnhancedComponent = higherOrderComponent(WrappedComponent)
// 组件是将props转换为UI, 而高阶组件是将组件转换为另一个组件


// 大部分情况下，可以使用React.PureComponent代替手写shouldComponentUpdate。但是他只进行浅比较，所以当props和state某种程度是可变的话，就不能使用pureComponent了。
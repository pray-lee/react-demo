import React from "react";

// fragment相当于vue的template标签，不生成真实的dom
export default function FragmentDemo() {
  return (
    <React.Fragment>
      <i>React.Fragment: <br/></i>
      <i>1</i>
      <i>2</i>
      <i>3</i>
    </React.Fragment>
  )
}

export const ShortFragment = () => {
  const a = 'shortFragment: "<>"<br/>'
  return (
    <>
      <i dangerouslySetInnerHTML={{__html:a}}></i>
      <i>11</i>
      <i>22</i>
      <i>33</i>
    </>
  )
}

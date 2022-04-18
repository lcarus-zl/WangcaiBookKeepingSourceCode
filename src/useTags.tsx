import { useState } from "react";

const useTags = ()=>{ //封装一个自定义Hook 使用了useState返回一个接口
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  return {tags,setTags}
}

export {useTags}
import { useUpdate } from "hooks/useUpdate";
import { createId } from "lib/createId";
import { useEffect, useState } from "react";


const useTags = ()=>{ //封装一个自定义Hook 使用了useState返回一个接口
  const [tags,setTags] = useState<{id:number,name:string}[]>([]);
  useEffect(()=>{
    let localTags = (JSON.parse(window.localStorage.getItem('tags') || '[]'))
    if(localTags.length === 0){
      localTags = [
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'}
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify( tags))
  },[tags])
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id:number) => {
    let result = -1
    for(let i= 0;i < tags.length;i++){
      if(tags[i].id === id){
        result = i
        break;
      }
    }
    return result
  }
  const updateTag = (id:number,{name}:{name:string})=>{
    //方法一
    setTags(tags.map( tag => tag.id === id ? {id,name} : tag))
    //方法二
    // const index = findTagIndex(id)
    // //深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // //把 tagsClone 的第index删掉，换成{id:id,name:obj.name}
    // tagsClone.splice(index,1,{id:id,name:obj.name});
    // setTags(tagsClone)
  }
  const deleteTag = (id:number)=>{
    //方法一
    setTags(tags.filter(tag => tag.id !== id))
    //方法二
    // const index = findTagIndex(id)
    // //深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // //把 tagsClone 的第index删掉
    // tagsClone.splice(index,1);
    // setTags(tagsClone)
  }
  const addTag = () =>{
    const tagName = window.prompt('新的标签名为：');
    if(tagName !== null && tagName !== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  const getName=(id:number)=>{
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : ''
  }
  return {tags,getName,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag}
}

export {useTags}
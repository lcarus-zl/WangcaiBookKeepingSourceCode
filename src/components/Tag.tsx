import React from "react"
import { useParams,useHistory } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"
import { Button } from "./Button"
import { Center } from "./Centers"
import Icon from "./Icon"
import { Input } from "./Input"
import Layout from "./Layout"
import { Space } from "./Space"

type Params = {
  id:string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px;
  line-height: 20px;
  background: white;
  align-items: center;
`

const InputWrapper = styled.div`
  background: white;
  margin-top: 8px;
  padding: 0 16px ;
`
const Tag:React.FC = ()=>{
  const {findTag,updateTag,deleteTag} = useTags()
  const { id:idString } = useParams<Params>()
  const tag = findTag(parseInt(idString))
  const tagContent = (tag:{id:number,name:string})=>(
    <div>
      <InputWrapper >
        <Input label='标签名:' type='text' placeholder="标签名" value={tag.name}
        onChange={(e)=>{
          updateTag(tag.id,{name:e.target.value})
        }}></Input>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>{deleteTag(tag.id)}}>删除标签</Button>
      </Center>
    </div>
  )
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }
  return(
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon name={""}/>
      </Topbar>
        { tag ?  tagContent(tag): <Center>tag 不存在</Center>}
    </Layout>
  )

}

export {Tag}


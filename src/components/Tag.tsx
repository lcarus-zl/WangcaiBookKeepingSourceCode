import React from "react"
import { useParams } from "react-router-dom"
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
  const {findTag} = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon name="right"></Icon>
      </Topbar>
      <div>
      <InputWrapper >
        <Input label='标签名:' type='text' placeholder="标签名" value={tag.name}></Input>
      </InputWrapper>
      </div>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )

}

export {Tag}


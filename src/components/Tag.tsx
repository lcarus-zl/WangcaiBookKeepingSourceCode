import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"
import { Button } from "./Button"
import Icon from "./Icon"
import Layout from "./Layout"

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
      <label >
        <span>标签名</span>
        <input type="text" placeholder="标签名" />
      </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )

}

export {Tag}

function fuck(fuck: any) {
  throw new Error("Function not implemented.")
}

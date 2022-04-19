import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

 export type RecordItem ={
  tagIds:number[]
  note:string
  category:'+' | '-'
  amount: number
  createdAt:string //ISO 8601 国际标准的字符串格式
}
type newRecordItem = Omit<RecordItem,'createAt'>//专门用于对象忽略其中一个属性

const useRecords = ()=>{
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
  const addRecord = (newRecord:newRecordItem)=>{
    if(newRecord.amount <= 0){
      alert('请输入金额')
      return false}
    if(newRecord.tagIds.length === 0){
      alert('请选择标签')
      return false 

    }
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecords([...records, record])
    return true
  }
  
  return {records,addRecord}
}
export {useRecords}
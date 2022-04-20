import  { useEffect, useState } from "react"
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
  },records)
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
  const updateTagNote = (record:RecordItem) =>{
    const newNote:string = window.prompt('请输入新的备注',record.note) || '未备注';
    const newRecords = records
    for(let i = 0;i<records.length;i++){
      if(records[i] === record){
        newRecords[i].note = newNote
        setRecords([...records])
      }
    }
  }
  return {records,addRecord,updateTagNote}
}
export {useRecords}
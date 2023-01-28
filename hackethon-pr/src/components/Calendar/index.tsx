import { FC, useState } from "react";
import ReactCalendar from "react-calendar";
import {add,format} from "date-fns"
import { INTERVAL, STORE_CLOSING_TIME, STORE_OPENING_TIME } from "../constants/config";

interface indexProps {}
interface DateType{
    justDate: Date | null
    dateTime: Date | null
}
const index: FC<indexProps> = ({}) => {
    const [date,setDate] = useState<DateType>({
        justDate:null,
        dateTime:null,
    })
    console.log(date.dateTime)
    const getTimes = ()=>{
        if(!date.justDate) return
        const {justDate}=date
        const begining = add(justDate,{hours:STORE_OPENING_TIME})
        //it means we are opening at 9 o clock
        const end= add(justDate,{hours:STORE_CLOSING_TIME})
        //closing at 17 o clock
        const interval = INTERVAL //in minutes
       
        const times=[]
        for(let i=begining;i<=end;i=add(i,{minutes:interval})){
           times.push(i) 
        }
        return times
    }     
    const times = getTimes()
  return (
    <div className='flex h-screen flex-col  items-center justify-center'>
      {date.justDate ? (<div className="flex gap-4">
          {times?.map((time,i)=>(
            <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                <button type="button" onClick={()=>setDate((prev)=>({...prev,dateTime:time}))}>
                    {format(time,'kk:mm')}
                </button>
            </div>
          ))}
      </div>):(<ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={(date) => setDate((prev)=>({...prev,justDate:date}))}
      />)}
    </div>
  );
};
export default index;

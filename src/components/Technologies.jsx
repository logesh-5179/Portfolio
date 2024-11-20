import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiMysql } from "react-icons/di"; 
import { SiDjango } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
           
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiPython className="text-7xl text-blue-500"/>
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-blue-500"/>
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiJava className="text-7xl text-red-500"/>
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiMysql className="text-7xl text-orange-500"/>
</div>

<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiMongodb className="text-7xl text-green-500"/>
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiDjango className="text-7xl text-green-500"/>
</div>


        </div>
      
    </div>
  )
}

export default Technologies

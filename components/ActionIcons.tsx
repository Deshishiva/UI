import Link from "next/link";
const actions=[
{label:"Learn",icon:"📚",path:"/learn"},
{label:"Calls",icon:"📞",path:"/calls"},
{label:"Stories",icon:"📘",path:"/now-playing?id=1"},
{label:"Quiz",icon:"❓",path:"/quiz"},
];
export default function ActionIcons(){
 return(
  <div className="grid grid-cols-4 mt-5">
   {actions.map((a,i)=>(
    <Link key={i} href={a.path}>
     <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white shadow rounded-full flex items-center justify-center text-2xl">{a.icon}</div>
      <p className="text-xs mt-1">{a.label}</p>
     </div>
    </Link>
   ))}
  </div>
 )
}
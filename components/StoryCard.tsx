export default function StoryCard({title,img}){
 return(
  <div className="min-w-[140px] bg-white shadow rounded-xl p-2">
    <div className="w-full h-32 bg-gray-200 rounded"></div>
    <p className="text-sm font-semibold mt-2">{title}</p>
  </div>
 )
}
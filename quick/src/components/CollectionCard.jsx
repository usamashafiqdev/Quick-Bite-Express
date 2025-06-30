"use client"

export default function CollectionCard({ collection }) {
  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer group"
   
    >
      <img
        src={collection.image || "/placeholder.svg"}
        alt={collection.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold text-lg mb-1"
        
        >{collection.title}</h3>
        <p className="text-sm opacity-90">{collection.subtitle}</p>
        <p className="text-xs opacity-75 mt-1">{collection.places} Places</p>
      </div>
    </div>
  )
}

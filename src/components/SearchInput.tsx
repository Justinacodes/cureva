import React, { useState } from 'react'

const SearchInput: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 bg-white shadow-md rounded-full page-container md:px-8 py-2 w-full max-w-lg">
        
            <input
              type="search"
              placeholder="Search for treatments/specialties e.g IVF, Knee Replacement..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="grow p-3 rounded-full outline-none text-sm"
            />
            <button className="bg-primary text-white px-10 py-2 rounded-full font-semibold hover:bg-[#081c4e] transition flex items-center gap-2">
              
              <span className="hidden sm:inline">Search</span>
            </button>
          
    </div>
  )
}

export default SearchInput
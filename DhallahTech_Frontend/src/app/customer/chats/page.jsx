"use client";
import { useState } from 'react';
import ChatEngine from '@/components/chat/ChatEngine';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export default function CustomerChatPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFromSearch, setSelectedFromSearch] = useState(null);

    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 1) {
            const q = query(
                collection(db, "offices"), 
                where("officeName", ">=", term), 
                where("officeName", "<=", term + '\uf8ff')
            );
            const snap = await getDocs(q);
            setSearchResults(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else { setSearchResults([]); }
    };

    return (
<div className="p-4 bg-gray-50 min-h-screen" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <input 
                    type="text" 
                    placeholder="ابحث عن مكتب لمراسلته..." 
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-4 rounded-2xl border shadow-sm outline-none focus:border-purple-500"
                />
                {searchResults.length > 0 && (
                    <div className="absolute z-50 w-full bg-white shadow-xl rounded-xl mt-2 border">
                        {searchResults.map(office => (
                            <div 
                                key={office.id} 
                                onClick={() => {
                                    setSelectedFromSearch(office); 
                                    setSearchResults([]);
                                    setSearchTerm("");
                                }}
                                className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-0"
                            >
                                {office.officeName}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <ChatEngine externalSelectedChat={selectedFromSearch} />
        </div>
    );
}
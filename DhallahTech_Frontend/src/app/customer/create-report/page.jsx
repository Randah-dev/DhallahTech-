"use client";

import React from "react";
import UploadBox from '@/components/upload/UploadBox';

export default function CustomerDashboard() {
  return (
   
         
         <div  className="flex flex-col items-center justify-center gap-1 min-h-screen p-4 bg-gray-50"> 
            <div className="space-y-8 text-right">
                
               <UploadBox userRole="customer" />
                   
                        </div>
                        
                    </div>
          
        );
  

}
"use client";

import UploadBox from "@/components/upload/UploadBox";

export default function GuestCreateReportPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <UploadBox userRole="guest" />
    </div>
  );
}
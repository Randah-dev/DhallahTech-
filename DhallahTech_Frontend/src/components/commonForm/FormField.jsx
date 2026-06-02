"use client";

export default function FormField({ label, placeholder, isTextArea = false, type = "text" , value, onChange,
  required = false}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="fieldTitle mb-2">{label}</label>
      {isTextArea ? (
       // <textarea className="textarea text-right h-32" placeholder={placeholder} />
       <textarea className="textarea text-right h-32" 
        placeholder={placeholder}
        value={value}      
          onChange={onChange}
          required={required} />
      ) : (
       // <input type={type} className="input text-right" placeholder={placeholder} />
       <input type={type} className="input text-right"
         placeholder={placeholder}
         value={value}      
          onChange={onChange} 
          required={required}
          />
      )}
    </div>
  );
}
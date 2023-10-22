"use client";
import {LiaAtomSolid} from "react-icons/lia"

export default function Divider() {
 

  return (
    <div className="flex items-center justify-center py-12">
      <LiaAtomSolid className="w-12 h-12 animate-spin text-stone-500 hover:text-stone-900" />
    </div>
  );
}

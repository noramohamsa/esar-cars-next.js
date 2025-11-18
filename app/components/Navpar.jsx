"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-md   fixed top-0 left-0 z-50
             bg-gradient-to-b from-[#010101] to-[#676767]" dir="rtl">
      <div className="w-full h-[83px] flex items-center  pt-5 pb-5 px-15 gap-[124px]">

        {/* اللوجو */}
        <Link href="/" className="text-2xl font-bold text-[#FBA919]">
          إيسار Esar  
        </Link>

        {/* قائمة الديسكتوب */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/" className=" text-[#FBA919]  transition">الصفحة الرئيسية</Link>
          <Link href="/cars" >عن الشركة</Link>
          <Link href="/offers">خدماتنا</Link>
          <Link href="/about"> تصبح شريكا</Link>
          <Link href="/contact">تواصل معنا</Link>
        </div>
       {/* زرار "أصبح شريكا" + تسجيل الدخول */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/partner"
            className="text-[#FBA919]  hover:text-[#FBA919] transition"
          >
            أصبح شريكا
          </Link>

          <Link
            href="/signup"
            className="bg-[#FBA919] text-black px-5 py-2 rounded-lg shadow hover:bg-[#e6a500] transition"
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* زر قائمة الموبايل */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* قائمة الموبايل */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium" dir="rtl">
          <Link href="/" onClick={() => setOpen(false)}>الصفحة الرئيسيه</Link>
          <Link href="/cars" onClick={() => setOpen(false)}>عن الشركة</Link>
          <Link href="/offers" onClick={() => setOpen(false)}>خدماتنا</Link>
          <Link href="/about" onClick={() => setOpen(false)}>تصبح شريكا</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>تواصل معنا</Link>

          <Link
            href="/signup"
            className="bg-[#FFB800] text-black px-5 py-2 rounded-lg shadow text-center"
            onClick={() => setOpen(false)}
          >
         تسجيل الدخول
          </Link>
        </div>
      )}
    </nav>
  );
}

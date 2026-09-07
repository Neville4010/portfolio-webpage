"use client";
import Link from 'next/link';
import { useState } from 'react';
import { SomeContent } from '../SomeContent/SomeContent';
import { Modal } from '../Modal/Modal';

export default function Portfolio() {
  const [isOpened, setisOpened] = useState(false);
  return (
    <main>
      <div className = "mainscreen w-auto h-screen flex-auto">
        <div id = "projectOne" className = "overflow-y-auto w-150 h-180 sm:max-2xl:flex">
          <button className = "button w-140 h-120 sm:max-2xl:flex" onClick={() => setisOpened(true)}> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <button className = "button w-140 h-120 sm:max-2xl:flex"> li</button>
          <Modal isOpened={isOpened} onClose={() => setisOpened(false)}>
            <SomeContent />
          </Modal>
        </div>
      </div>
    </main>
  );
}

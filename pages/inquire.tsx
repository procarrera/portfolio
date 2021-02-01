import React, { useState } from "react";
import dynamic from "next/dynamic";

// const CroctComponent = dynamic(() => import("../src/components/Croct"), {
//   ssr: false,
// });

export default function Croct() {
  return (
    <>
      <h1>Croct</h1>
      <div style={{ textAlign: "center", fontSize: 14 }}>
        <i>
          We know that technology can transform the world and through the code
          everything becomes reality.
        </i>
      </div>
    </>
  );
}

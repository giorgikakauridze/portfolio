import React from "react";
import TabsComponent from "../_components/TabsComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="pt-20 flex justify-end">
        <div>
          <TabsComponent />
        </div>
      </div>
      {children}
    </div>
  );
}

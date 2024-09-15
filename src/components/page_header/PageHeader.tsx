import "./PageHeader.css";
import React from "react";

export default function PageHeader({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="page-header title-font-size">
            {children}
        </h1>
    );
}
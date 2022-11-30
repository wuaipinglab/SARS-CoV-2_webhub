import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import weblinks from "./weblinks.json"

const root = document.getElementById("root");

const App = () => {
    const [width, setWidth] = useState(root.offsetWidth);
    const [height, setHeight] = useState(root.offsetHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(root.offsetWidth);
            setHeight(root.offsetHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div width={width} height={height}>
            {weblinks.map((x) => (
                <div key={x.name}>
                    <a  href={x.link}>{x.name}</a>
                </div>
            ))}
        </div>
    )
}

createRoot(root).render(<App />);

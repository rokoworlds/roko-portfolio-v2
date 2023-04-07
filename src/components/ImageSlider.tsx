import { useState } from "react"

export default function ImageSlider({children: slides} : any) {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
    <div className="overrflow-hidden relative">
        <div className="flex">
            {slides}
        </div>
    </div>
    )
}
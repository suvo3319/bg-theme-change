import { useState } from "react";

export default function Colour() {
    const [colour, setColour] = useState('olive');
    return (
        <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: colour }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3">
                    <button
                    onClick={() => setColour('red')}
                    className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    style={{ backgroundColor: 'red' }}
                    >
                    Red
                    </button>
                    <button
                    onClick={() => setColour('green')}
                    className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    style={{ backgroundColor: 'green' }}
                    >
                    Green
                    </button>
                    <button
                    onClick={() => setColour('blue')}
                    className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    style={{ backgroundColor: 'blue' }}
                    >
                    Blue
                    </button>
                </div>
            </div>
        </div>
    )
}
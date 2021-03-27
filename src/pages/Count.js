import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1
                style={
                    count > 20 || count < 0
                        ? { color: 'red' }
                        : { color: 'black' }
                }
            >
                {count}
            </h1>
            <button
                className="btn btn-danger btn-md px-4 mx-2"
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
            <button
                className="btn btn-success btn-md px-4 mx-2"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </div>
    )
}

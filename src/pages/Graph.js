import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

export default function Graph() {
    const [xR, setXR] = useState([])
    const [x, setX] = useState(0)

    const [yR, setYR] = useState([])
    const [y, setY] = useState(0)

    const [data, setData] = useState({
        x: [],
        y: [],
    })

    const datas = {
        labels: data.x,
        datasets: [
            {
                label: '# of one-point iteration',
                data: data.y,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <div className="container">
            <div className="form-group">
                {console.log(data)}
                <label>X</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setX(parseInt(e.target.value))}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        xR.push(x)
                        setXR(xR)
                    }}
                >
                    add x
                </button>
                <br />
                <label>Y</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setY(parseInt(e.target.value))}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        yR.push(y)
                        setYR(yR)
                    }}
                >
                    add y
                </button>
                <br />
                <br />
                <button
                    className="btn btn-success"
                    onClick={async () => {
                        const res = await axios.post(
                            'http://localhost:8080/api/v1/users/graph',
                            {
                                x: xR,
                                y: yR,
                            }
                        )
                        setData(JSON.parse(res.request.response))
                    }}
                >
                    Plot Graph
                </button>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col-md-6">
                        <Line data={datas} width={15} height={10} />
                    </div>
                    <div className="col-md-6">
                        <Line data={datas} width={15} height={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

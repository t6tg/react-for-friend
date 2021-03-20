import { useEffect, useState } from 'react'

const FormLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const [isShow, setShow] = useState(true)

    useEffect(() => {
        console.log('Mount Component')
    }, [])

    useEffect(() => {
        console.log('useEffect 01')
    })

    useEffect(() => {
        console.log('useEffect : username Change')
    }, [data.username, data.password])

    return (
        <div>
            <img
                src={
                    'https://bams.in.th/wp-content/uploads/2020/06/login-Bams6.png'
                }
                alt="image01"
            />
            <img
                src={'../images/image-01.jpeg'}
                alt="image-02"
                lazy="loading"
            />
            <br />
            <label htmlFor="username">Username : </label>
            <input
                id="username"
                type="text"
                onChange={(e) => {
                    setData({
                        ...data,
                        username: e.target.value,
                    })
                }}
            />{' '}
            <br />
            <label htmlFor="password">Password : </label>
            <input
                id="password"
                type="password"
                onChange={(e) => {
                    setData({
                        ...data,
                        password: e.target.value,
                    })
                }}
            />{' '}
            <br />
            <hr />
            <button
                onClick={() => {
                    setShow(!isShow)
                }}
            >
                click me
            </button>
            : {isShow.toString()}
            <br />
            {isShow && (
                <div>
                    <b>Username: </b> {data.username} <br />
                    <b>Password: </b> {data.password}
                </div>
            )}
        </div>
    )
}

export default FormLogin

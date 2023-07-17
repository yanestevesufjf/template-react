import { useState } from 'react'
import './styles.css'

function Sidebar() {

    const [minimal, setMinimal] = useState(false)

    const handleMinimal = () => {
        setMinimal(!minimal)
    }

    return (
        <div className={minimal ? 'sidebar sidebar-min' : 'sidebar'}>
            <p>DevIn[Car]</p>
            <button onClick={handleMinimal}>Change</button>
        </div>
    )
}

export default Sidebar
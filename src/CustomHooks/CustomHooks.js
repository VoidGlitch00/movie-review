import { useEffect, useState } from "react"

const CustomHook = () => {
    const [reviewer, setReviewer] = useState([]);
    useEffect( ()=> {
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setReviewer(data))
    }, [reviewer]);
    return [reviewer, setReviewer];
}

export default CustomHook;
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

function Postcard() {
    return (
            <div className="w-full md:w-1/2 mx-auto px-1">
                <div className="postnav h-10 text-white my-2  flex justify-between items-center">
                    <div className="flex items-center justify-center gap-2">
                        <img src="https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                            className="h-8 w-8 rounded-full" />
                        <h1>isourabh99</h1>
                    </div>
                    <div>
                        <BsThreeDotsVertical />
                    </div>

                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                        className="w-full h-full object-cover" />
                </div>
                <div className="text-white my-2">
                    <h1>caption cap ti amor...</h1>
                </div>
            </div>
    )
}

export default Postcard
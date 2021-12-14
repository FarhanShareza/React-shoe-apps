import React from 'react'
import './inputColloum.scss'

const InputColloum = ({label, ...rest}) => {
    return (
        <div className="row-box-inputc">
            <div class="col-100-inpc">
                <p className="remove-btm">{label}<span><input className="input-colloum span-teks" {...rest} /></span></p>
            </div>
        </div>
    )
}

export default InputColloum

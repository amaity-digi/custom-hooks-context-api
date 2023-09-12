import React from 'react'
import { useCustom } from '../Hooks/CustomHooks';

const ThirdComponent = () => {
  const {name, channel} = useCustom();

    return (
        <div>
            I am in ThirdComponent
            <h2>{name}</h2>
            <h2>{channel}</h2>
        </div>
    )
}

export default ThirdComponent
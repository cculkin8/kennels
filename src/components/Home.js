import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h1 className ="solid">Nashville Kennels</h1>
        <small className ="solid">Take more dogs from us please.</small>

        <address className ="solid">
            <div>Visit Us at the Nashville North Location:
            500 Puppy Way
            </div>
            </address>
        <PropsAndState classname="yourName" yourName={"His Royal Thiccness"} />
    </>
)
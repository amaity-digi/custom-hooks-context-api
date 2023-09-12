import { useContext } from "react";
import { ChannelContext, MyContext, NameContext } from "../context/RootContext";


export const useCustom = () => {
    const name = useContext(NameContext);
    const channel = useContext(ChannelContext);
    const myContextValue = useContext(MyContext);
    return { name, channel, myContextValue };
}
import React from 'react';
import {useParams} from "react-router-dom";
import {PagesType} from "../../data/dataState";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}
export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()
    console.log(params)
    return (
        pages[Number(params.id)]
            ? <div>
                {pages[Number(params.id)].heading}
                {pages[Number(params.id)].about}
            </div>
            : <Error404/>
    );
};


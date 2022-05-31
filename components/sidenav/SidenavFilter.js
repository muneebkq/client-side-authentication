import React from 'react'
import { Button } from '@mui/material'
import { sideNavFilterData } from './SidenavData'
import Link from 'next/link'
import Typography from '@mui/material/Typography';

export default function Sidenavfilter(props) {
    function FilterList(props) {
        return (
            <div>
                <div>
                    {props.children}
                </div>
                <div>
                    {sideNavFilterData[props.route].map((item, index) => { return <div key={index}><Link href={"/"+props.route+"/"+item.toLowerCase().replace(" ","")} passHref><Button variant="contained">{item}</Button></Link></div> })}
                </div>
            </div>
            )
    }
    return (
        <div className="pt-4 h-screen">
            {props.activeRoute.includes("/home") && <FilterList route="home"><Typography variant="h6">Navigation</Typography></FilterList>}
            {props.activeRoute.includes("/features") && <FilterList route="features"><Typography variant="h6">Navigation</Typography></FilterList>}
            {props.activeRoute.includes("/licenses") && <FilterList route="licenses"><Typography variant="h6">Segments</Typography></FilterList>}
            {props.activeRoute.includes("/activations") && <FilterList route="activations"><Typography variant="h6">Segments</Typography></FilterList>}
            {props.activeRoute.includes("/trials") && <FilterList route="trials"><Typography variant="h6">Segments</Typography></FilterList>}
            {props.activeRoute.includes("/releases") && <FilterList route="releases"><Typography variant="h6">Navigation</Typography></FilterList>}
            {props.activeRoute.includes("/users") && <FilterList route="users"><Typography variant="h6">Segments</Typography></FilterList>}
            {props.activeRoute.includes("/reports") && <FilterList route="reports" />}
            {props.activeRoute.includes("/developer") && <FilterList route="developer" />}
            {props.activeRoute.includes("/account") && <FilterList route="account" />}
        </div>
    )
}

import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import Sidenavfilter from '../../../components/sidenav/SidenavFilter';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Index() {
  const router = useRouter()
  return (
    <>
      <div className='flex'>
        <div className='bg-zinc-100 w-56'>
          <Sidenavfilter activeRoute={router.pathname} />
        </div>
        <div>
          <div>
            <Typography variant="h3">Products</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/home" passHref>
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/home/products">
                Products
              </Link>
            </Breadcrumbs>
          </div>
          <div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Licenses</TableCell>
                    <TableCell>Trial Activations</TableCell>
                    <TableCell>Product Versions</TableCell>
                    <TableCell>Creation Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><Link href="/home/products/1232qwdasdaa" passHref>Flareget</Link></TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>200,000</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Jan 4</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>

                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  )
}

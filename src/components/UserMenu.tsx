import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi'
import { TbLogout } from 'react-icons/tb';
import { LuPackage2 } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/reducers/store';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user } = useSelector((state: RootState) => state.auth);
    const logoutHandler = () => {

    }

    return (
        <div className='relative z-30'>
            <div onClick={handleClick}
                className='sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'>
                <Avatar alt='Menu' src="" />
            </div>
            <Menu
                sx={{ width: "400px" }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                        sx: { width: 160 },
                    },
                }}
            >
                <Link to="/profile">
                    <MenuItem className="flex gap-2" onClick={handleClose}>
                        <BiUser className='text-xl' /> {user?.username}
                    </MenuItem>
                </Link>
                <Link to="/order">
                    <MenuItem className="flex gap-2" onClick={handleClose}>
                        <LuPackage2 className='text-xl' /> Orders
                    </MenuItem>
                </Link>
                <MenuItem className="flex gap-2" onClick={logoutHandler}>
                    <TbLogout className='text-xl' /> Logout
                </MenuItem>
            </Menu>
        </div>
    )
}

export default UserMenu;

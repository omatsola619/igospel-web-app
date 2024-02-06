import React, { useContext, useState } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarMenuData } from '../../data/DummyData';
import { MenuItem, SubMenuItem } from '../../types';
import { SidebarContext } from '../../context/sidebarContext';

function SidebarClosed() {
    const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
    const { isScroll } = useContext(SidebarContext);

    const toggleSubmenu = (index: number) => {
        setSubmenuStates((prev: any) => ({
            ...prev,
            [index]: !prev[index]
        }));
    }; 

    return (
        <div className=''>
            <ul className="pt-6">
                {
                    sidebarMenuData.map((item: MenuItem, i: number) => (
                        <div key={i}>
                            {item.subMenus ? (
                                <li
                                    className={`flex rounded-md py-2 px-10 cursor-pointer text-black text-sm items-center gap-x-4 ${item.gap ? 'mt-9' : 'mt-2'}`}
                                    onClick={() => item.subMenus && toggleSubmenu(i)}
                                    key={i}
                                >
                                    <img alt="" src={item.icon} />
                                    <span className="flex-1 text-sm font-sf-reg">{item.title}</span>
                                    {item.subMenus && (
                                        <AiFillCaretRight className={`${submenuStates[i] ? 'rotate-90' : ''}`} />
                                    )}
                                </li>
                            ) : (
                                <Link to={item.src} className={`flex flex-col w-[100px] rounded-md py-2 pr-10 pl-[25px] items-center cursor-pointer text-white text-sm`}>
                                    <img alt="" src={item.icon} className='w-6 h-6' />
                                    <span className="flex-1 font-sf-reg text-[11px] text-center">{item.title}</span>
                                </Link>
                            )}
                            {
                                item.subMenus && submenuStates[i] && (
                                    <ul key={i}>
                                        {item.subMenus.map((subItem: SubMenuItem, i: number) => (
                                            <li key={i} className='flex cursor-pointer px-5 text-center text-sm text-gray-500 py-1 ml-14 font-sf-reg'>
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default SidebarClosed